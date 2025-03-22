-- Airport Table
CREATE TABLE IF NOT EXISTS airport (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    airport_code TEXT NOT NULL
);

-- Parking Area Table
CREATE TABLE IF NOT EXISTS parking_area (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    area_name TEXT NOT NULL,
    airport_id INTEGER,
    FOREIGN KEY (airport_id) REFERENCES airport(id) ON DELETE CASCADE
);

-- Parking Row Table
CREATE TABLE IF NOT EXISTS parking_row (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    row_name TEXT NOT NULL,
    airport_id INTEGER,
    FOREIGN KEY (airport_id) REFERENCES airport(id) ON DELETE CASCADE
);

-- Plane Slot Table
CREATE TABLE IF NOT EXISTS plane_slot (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    plane_id INTEGER,
    parking_row_id INTEGER,
    FOREIGN KEY (plane_id) REFERENCES plane(id) ON DELETE CASCADE,
    FOREIGN KEY (parking_row_id) REFERENCES parking_row(id) ON DELETE CASCADE
);

-- Plane Table
CREATE TABLE IF NOT EXISTS plane (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    tail_number TEXT UNIQUE NOT NULL,
    model TEXT NOT NULL,
    owner_group TEXT NOT NULL,
    active INTEGER DEFAULT 0
);

-- Schedule Table
CREATE TABLE IF NOT EXISTS schedule (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    plane_id INTEGER,
    status_plane INTEGER DEFAULT 0,
    arrival_time TEXT NOT NULL,
    departure_time TEXT NOT NULL,
    airport_id INTEGER,
    FOREIGN KEY (plane_id) REFERENCES plane(id) ON DELETE CASCADE,
    FOREIGN KEY (airport_id) REFERENCES airport(id) ON DELETE CASCADE
);

-- Workers Table
CREATE TABLE IF NOT EXISTS workers (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    airport_id INTEGER,
    job TEXT NOT NULL,
    status_worker TEXT NOT NULL,
    FOREIGN KEY (airport_id) REFERENCES airport(id) ON DELETE CASCADE
);

-- Services Table
CREATE TABLE IF NOT EXISTS services (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    airport_id INTEGER,
    workers_id INTEGER,
    plane_id INTEGER,
    service_type TEXT NOT NULL,
    priority_status TEXT NOT NULL,
    FOREIGN KEY (airport_id) REFERENCES airport(id) ON DELETE CASCADE,
    FOREIGN KEY (workers_id) REFERENCES workers(id) ON DELETE CASCADE,
    FOREIGN KEY (plane_id) REFERENCES plane(id) ON DELETE CASCADE
);

-- Fueling Table
CREATE TABLE IF NOT EXISTS fueling (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    airport_id INTEGER,
    fuel_capacity INTEGER NOT NULL,
    fuel_left INTEGER NOT NULL,
    fuel_type TEXT NOT NULL,
    storage_type TEXT NOT NULL,
    FOREIGN KEY (airport_id) REFERENCES airport(id) ON DELETE CASCADE
);
