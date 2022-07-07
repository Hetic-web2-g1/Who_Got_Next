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
                'id_facility_number': row[30],
                'name': row[31],
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

    with engine.begin() as conn:
        stmt = sa.insert(field_table).values(fields)
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


get_data_data_es()
get_data_es_activites()
