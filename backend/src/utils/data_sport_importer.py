import os
import csv
from re import sub
from uuid import uuid4

from database.db_engine import engine
from manager import FieldManager
from schema.field import FieldCreate
from schema.sports_equipment import SportsEquipmentCreate
from utils.log import logging


# Both file must be situated in the root of the project.
# data-es.csv
# data-es-activites.csv


def get_data_data_es(CUR_DIR, file):
    i = 0
    DATA_FILE = os.path.join(CUR_DIR, file)
    with engine.begin() as conn:
        with open(DATA_FILE, "r", encoding='utf-8') as file:
            csvreader = csv.reader(file, delimiter=";")
            header = next(csvreader)
            for row in csvreader:
                print(i)
                i += 1
                field = FieldCreate(id_user=uuid4(), id_facility_number=row[0], name=row[1], id_sports_equipment=row[2], description=row[3], longitude=float(row[4]), latitude=float(row[5]), handicap=bool(row[6]), parking=bool(row[7]), public_transport=bool(
                    row[8]), lightening=bool(row[9]), free_access=bool(row[10]), dressing_room=bool(row[11]), shower=bool(row[12]), bathroom=bool(row[13]), heating=bool(row[14]), ground_type=row[15], nature_place=row[16])
                field = FieldManager.create_field(conn, field)


def get_data_es_activites(CUR_DIR, file):
    i = 0
    DATA_FILE = os.path.join(CUR_DIR, file)
    with engine.begin() as conn:
        with open(DATA_FILE, "r", encoding='utf-8') as file:
            csvreader = csv.reader(file, delimiter=";")
            header = next(csvreader)
            for row in csvreader:
                i += 1
                sports_equipment = SportsEquipmentCreate(id_facility_number=row[0], id_sports_equipment=row[1], type_equipement=row[
                    2], family_equipement=row[3], activity=row[4], caract1=list(row[5].replace(
                        '{', '').replace('"', '').replace('}', '').split(",")), caract2=row[6])
                sports_equipment = FieldManager.create_sports_equipment(
                    conn, sports_equipment)


def process_data(CUR_DIR):
    logging.info("Starting")
    print("Starting")
    get_data_data_es(CUR_DIR, "data-es.csv")
    logging.info("Phase 2")
    # print("Phase 2")
    # get_data_es_activites(CUR_DIR, "data-es-activites.csv")
    # logging.info("Finished")
    print("Finished")
