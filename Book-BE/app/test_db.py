from database import engine

try:
    conn = engine.connect()
    print("✅ MSSQL Connected Successfully")
    conn.close()
except Exception as e:
    print("❌ DB Connection Failed:", e)
