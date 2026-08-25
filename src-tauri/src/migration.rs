use tauri_plugin_sql::{Migration, MigrationKind};

pub fn get_migrations() -> Vec<Migration> {
    vec![
        Migration {
            version: 1,
            description: "create_initial",
            sql: include_str!("sql/001_create_initial.sql"),
            kind: MigrationKind::Up,
        },
        Migration {
            version: 2,
            description: "add_indexes",
            sql: include_str!("sql/002_add_indexes.sql"),
            kind: MigrationKind::Up,
        },
    ]
}
