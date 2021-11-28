import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('weather-app.db');

const createTableIfNotExists =
	'CREATE TABLE IF NOT EXISTS places (id INTEGER PRIMARY KEY NOT NULL, title TEXT NOT NULL, lat REAL NOT NULL, lng REAL NOT NULL);';

export const init = () => {
	return new Promise((resolve, reject) => {
		db.transaction((tx) => {
			tx.executeSql(
				createTableIfNotExists,
				[],
				(_, success) => {
					resolve(success);
				},
				(_, err) => {
					reject(err);
				}
			);
		});
	});
};

export const insertPlace = (locationObject) => {
	return new Promise((resolve, reject) => {
		db.transaction((tx) => {
			tx.executeSql(
				'INSERT INTO places(title, lat, lng) VALUES (?, ?, ?);',
				[locationObject.title, locationObject.lat, locationObject.lng],
				(_, success) => {
					resolve(success);
				},
				(_, err) => {
					reject(err);
				}
			);
		});
	});
};

export const fetchPlaces = () => {
	return new Promise((resolve, reject) => {
		db.transaction((tx) => {
			tx.executeSql(
				'SELECT * FROM places;',
				[],
				(_, success) => {
					resolve(success);
				},
				(_, err) => {
					reject(err);
				}
			);
		});
	});
};