import tkinter as tk

# Configuración de la pantalla
ANCHO = 800
ALTO = 500
VELOCIDAD_JUEGO = 20  # ms entre cada actualización

# Configuración de los elementos
ANCHO_PALETA = 15
ALTO_PALETA = 90
TAMANO_PELOTA = 15

class JuegoPong:
    def __init__(self, root):
        self.root = root
        self.root.title("Pong - Python Tkinter")
        self.root.resizable(False, False)

        # Crear el lienzo (Canvas)
        self.canvas = tk.Canvas(root, width=ANCHO, height=ALTO, bg="black")
        self.canvas.pack()

        # Puntuaciones
        self.puntos_p1 = 0
        self.puntos_p2 = 0

        # Dibujar elementos iniciales
        self.linea_central = self.canvas.create_line(ANCHO // 2, 0, ANCHO // 2, ALTO, fill="white", dash=(5, 5))
        self.texto_puntuacion = self.canvas.create_text(
            ANCHO // 2, 30, text="0   0", fill="white", font=("Arial", 30, "bold")
        )

        # Paletas y Pelota
        self.paleta1 = self.canvas.create_rectangle(20, ALTO//2 - ALTO_PALETA//2, 20 + ANCHO_PALETA, ALTO//2 + ALTO_PALETA//2, fill="white")
        self.paleta2 = self.canvas.create_rectangle(ANCHO - 20 - ANCHO_PALETA, ALTO//2 - ALTO_PALETA//2, ANCHO - 20, ALTO//2 + ALTO_PALETA//2, fill="white")
        self.pelota = self.canvas.create_oval(ANCHO//2 - TAMANO_PELOTA//2, ALTO//2 - TAMANO_PELOTA//2, ANCHO//2 + TAMANO_PELOTA//2, ALTO//2 + TAMANO_PELOTA//2, fill="white")

        # Velocidades y movimiento
        self.vel_pelota_x = 5
        self.vel_pelota_y = 5
        self.vel_paleta = 8

        # Estado de las teclas
        self.teclas = set()
        self.root.bind("<KeyPress>", self.tecla_presionada)
        self.root.bind("<KeyRelease>", self.tecla_soltada)

        # Iniciar bucle del juego
        self.actualizar_juego()

    def tecla_presionada(self, event):
        self.teclas.add(event.keysym)

    def tecla_soltada(self, event):
        self.teclas.remove(event.keysym) if event.keysym in self.teclas else None

    def mover_paletas(self):
        # Paleta Izquierda (W / S)
        if "w" in self.teclas or "W" in self.teclas:
            if self.canvas.coords(self.paleta1)[1] > 0:
                self.canvas.move(self.paleta1, 0, -self.vel_paleta)
        if "s" in self.teclas or "S" in self.teclas:
            if self.canvas.coords(self.paleta1)[3] < ALTO:
                self.canvas.move(self.paleta1, 0, self.vel_paleta)

        # Paleta Derecha (Arriba / Abajo)
        if "Up" in self.teclas:
            if self.canvas.coords(self.paleta2)[1] > 0:
                self.canvas.move(self.paleta2, 0, -self.vel_paleta)
        if "Down" in self.teclas:
            if self.canvas.coords(self.paleta2)[3] < ALTO:
                self.canvas.move(self.paleta2, 0, self.vel_paleta)

    def reiniciar_pelota(self):
        self.canvas.coords(
            self.pelota, 
            ANCHO//2 - TAMANO_PELOTA//2, ALTO//2 - TAMANO_PELOTA//2, 
            ANCHO//2 + TAMANO_PELOTA//2, ALTO//2 + TAMANO_PELOTA//2
        )
        self.vel_pelota_x *= -1  # Cambia la dirección hacia quien anotó

    def mover_pelota(self):
        self.canvas.move(self.pelota, self.vel_pelota_x, self.vel_pelota_y)
        px1, py1, px2, py2 = self.canvas.coords(self.pelota)

        # Rebote superior e inferior
        if py1 <= 0 or py2 >= ALTO:
            self.vel_pelota_y *= -1

        # Colisión con paleta izquierda
        p1_coords = self.canvas.coords(self.paleta1)
        if px1 <= p1_coords[2] and p1_coords[1] <= py2 and py1 <= p1_coords[3]:
            if self.vel_pelota_x < 0:
                self.vel_pelota_x *= -1

        # Colisión con paleta derecha
        p2_coords = self.canvas.coords(self.paleta2)
        if px2 >= p2_coords[0] and p2_coords[1] <= py2 and py1 <= p2_coords[3]:
            if self.vel_pelota_x > 0:
                self.vel_pelota_x *= -1

        # Puntos
        if px1 <= 0:
            self.puntos_p2 += 1
            self.actualizar_marcador()
            self.reiniciar_pelota()
        elif px2 >= ANCHO:
            self.puntos_p1 += 1
            self.actualizar_marcador()
            self.reiniciar_pelota()

    def actualizar_marcador(self):
        self.canvas.itemconfig(self.texto_puntuacion, text=f"{self.puntos_p1}   {self.puntos_p2}")

    def actualizar_juego(self):
        self.mover_paletas()
        self.mover_pelota()
        self.root.after(VELOCIDAD_JUEGO, self.actualizar_juego)

# Ejecutar la ventana
if __name__ == "__main__":
    root = tk.Tk()
    juego = JuegoPong(root)
    root.mainloop()