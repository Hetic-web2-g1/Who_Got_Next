from collections import defaultdict
import csv

import sqlalchemy as sa

from database.db_engine import engine
from database.tables.field import field_table
from database.tables.sports_equipment import sports_equipment_table

# Both file must be situated in the same folder as the script.
# data-es.csv
# data-es-activites.csv


def get_data_data_es():
    fields = []
    with open('./scripts/data-es.csv', "r", encoding='utf-8') as file:
        counter = 0
        csvreader = csv.reader(file, delimiter=";", )
        next(csvreader, None)  # Skip header
        for row in csvreader:
            counter += 1
            if counter % 1000 == 0:
                print(counter)

            fields.append({
                'id_user': '96df7371-473e-41d3-b8a0-71c76b190215',
                'id_facility': row[0],
                'id_equipment': [row[30]],
                'name_facility': row[1],
                'name_equipment': [row[31]],
                'type': row[33],
                'longitude': row[36],
                'latitude': row[37],
                'handicap': bool(row[27]),
                'parking': bool(row[20]),
                'public_transport': bool(row[22]),
                'lightening': True if row[39] == "true" else False,
                'free_access': True if row[40] == "true" else False,
                'dressing_room': bool(float(row[43] or 0)),
                'shower': True if row[50] == "true" else False,
                'bathroom': True if row[51] == "true" else False,
                'heating': True if row[52] == "true" else False,
                'ground_type': row[181],
                'nature_place': row[182]
            })

    datas = {}

    for field in fields:
        if field['id_facility'] in datas:
            # Concatenate the list of name_equipment and id_equipment
            datas[field['id_facility']
                  ]["name_equipment"] += (field["name_equipment"])
            datas[field['id_facility']
                  ]["id_equipment"] += (field["id_equipment"])
            # Make an average of the localisation
            datas[field['id_facility']]["longitude"] = (
                float(datas[field['id_facility']]["longitude"]) + float(field["longitude"])) / 2
            datas[field['id_facility']]["latitude"] = (
                float(datas[field['id_facility']]["latitude"]) + float(field["latitude"])) / 2
        else:
            datas[field["id_facility"]] = field

    with engine.begin() as conn:
        for data in datas.values():
            stmt = sa.insert(field_table).values(data)
            conn.execute(stmt)


def get_data_es_activites():
    activities = []
    with open('./scripts/data-es-activites.csv', "r", encoding='utf-8') as file:
        counter = 0
        csvreader = csv.reader(file, delimiter=";")
        next(csvreader, None)  # Skip header
        for row in csvreader:
            counter += 1
            if counter % 1000 == 0:
                print(counter)

            activities.append({
                'id_facility_number': row[3],
                'equipment_type': row[5],
                'equipment_family': row[6],
                'activity': row[10]})

    with engine.begin() as conn:
        result = conn.execute(
            sa.select(field_table.c.id_facility_number))

        field_id_mapping = {row.id_facility_number for row in result}
        filtered_activities = list(filter(
            lambda x: x['id_facility_number'] in field_id_mapping, activities))

        conn.execute(sa.insert(sports_equipment_table).values(
            filtered_activities))
