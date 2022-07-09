import csv

import sqlalchemy as sa

from database.db_engine import engine
from database.tables.field import field_table
from database.tables.sports_equipment import sports_equipment_table

# Both file must be situated in the same folder as the script.
# data-es.csv
# data-es-activites.csv

# Start the script with
# > poetry run python -m scripts.sport_data_import


def get_data_data_es():
    fields = {}
    with open('./scripts/data-es.csv', "r", encoding='utf-8') as file:
        counter = 0
        csvreader = csv.reader(file, delimiter=";", )
        next(csvreader, None)  # Skip header
        for row in csvreader:
            counter += 1
            if counter % 100000 == 0:
                print(counter)

            if fields.get(row[0]) is None:
                fields[row[0]] = []

            fields[row[0]].append({
                'id_user': '96df7371-473e-41d3-b8a0-71c76b190215',
                'facility_id': row[0],
                'equipment_id': [row[30]],
                'facility_name': row[1],
                'equipments_name': [row[31]],
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

    data = []

    for facility_id in fields.keys():
        field_numbers = len(fields[facility_id])
        equipment_names = []
        equipment_ids = []
        facility_lat = 0
        facility_lng = 0
        for field in fields[facility_id]:
            facility_lat += float(field["latitude"])
            facility_lng += float(field["longitude"])

            equipment_names += (field["equipments_name"])
            equipment_ids += (field["equipment_id"])

        data.append({
            **fields[facility_id][0],
            'latitude': facility_lat / field_numbers,
            'longitude': facility_lng / field_numbers,
            'equipments_name': equipment_names,
            'equipment_id': equipment_ids
        })

    with engine.begin() as conn:
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
            if counter % 100000 == 0:
                print(counter)

            activities.append({
                'facility_id': row[0],
                'equipment_type': row[5],
                'equipment_family': row[6],
                'activity': row[10]})

    with engine.begin() as conn:
        result = conn.execute(
            sa.select(field_table.c.facility_id))

        field_id_mapping = {row.facility_id for row in result}
        filtered_activities = list(filter(
            lambda x: x['facility_id'] in field_id_mapping, activities))

        conn.execute(sa.insert(sports_equipment_table).values(
            filtered_activities))


# Comment line for import the needed table
get_data_data_es()
get_data_es_activites()
