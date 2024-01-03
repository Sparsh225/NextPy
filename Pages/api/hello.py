# pages/api/hello.py
from http.server import BaseHTTPRequestHandler
from typing import Optional

class Handler(BaseHTTPRequestHandler):
    def do_GET(self):
        self.send_response(200)
        self.send_header('Content-type', 'application/json')
        self.end_headers()
        self.wfile.write(self.get_message().encode())

    def get_message(self) -> Optional[str]:
        return '{"message": "Hello from Python!"}'
