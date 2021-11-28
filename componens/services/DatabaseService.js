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

const insertPlace = (title, lat, lng) => {
	return new Promise((resolve, reject) => {
		db.transaction((tx) => {
			tx.executeSql(
				'INSERT INTO places(title, lat, lng) VALUES (?, ?, ?);',
				[title, lat, lng],
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
