# Performance Analysis Report – Test con 50 usuarios

## Objetivo

Evaluar el comportamiento del sistema bajo una carga de 50 usuarios concurrentes, analizando tiempos de respuesta, estabilidad y degradación del rendimiento en comparación 
con cargas menores.

---

## Métricas obtenidas

* Usuarios concurrentes: 50
* Tiempo promedio (average): 253 ms
* Tiempo mínimo (min): 18 ms
* Tiempo máximo (max): 2294 ms
* Mediana (median): 159 ms
* Percentil 90 (P90): 403 ms
* Percentil 95 (P95): 779 ms
* Percentil 99 (P99): 2239 ms
* Tasa de error: 0 %
* Throughput: 1.9 requests/segundo

---

## Análisis de resultados

### Tiempo de respuesta

El tiempo promedio aumenta a 253 ms respecto a la prueba con menor carga, lo que 
indica una degradación leve del rendimiento.

La mediana (159 ms) se mantiene baja, lo que sugiere que la mayoría de las solicitudes 
siguen siendo rápidas, pero existen outliers que elevan significativamente el promedio.

El tiempo máximo de 2294 ms evidencia la presencia de respuestas muy lentas en 
determinados casos.

---

### Percentiles

* P90: 403 ms
* P95: 779 ms
* P99: 2239 ms

El análisis de percentiles muestra una variabilidad importante:

* el 90 % de las solicitudes se mantiene en valores aceptables
* el 95 % comienza a mostrar degradación notable
* el 99 % presenta tiempos muy elevados

Esto indica que, bajo carga, el sistema comienza a experimentar problemas de consistencia 
en el rendimiento.

---

### Estabilidad

La tasa de error es 0 %, lo cual indica que:

* el sistema continúa respondiendo todas las solicitudes
* no hay fallos funcionales bajo esta carga

Sin embargo, la ausencia de errores no implica un buen rendimiento.

---

### Throughput

El throughput de 1.9 requests por segundo muestra una leve mejora respecto 
a la prueba anterior.

Esto indica que el sistema procesa más solicitudes, pero a costa de mayor variabilidad 
en los tiempos de respuesta.

---

## Análisis general

El sistema mantiene estabilidad funcional bajo una carga de 50 usuarios concurrentes, 
pero presenta señales claras de degradación en el rendimiento.

Se observa:

* aumento en tiempos máximos
* incremento significativo en percentiles altos
* presencia de outliers que afectan la experiencia del usuario

Esto sugiere que el sistema comienza a alcanzar sus límites operativos.

---

## Conclusión

El sistema soporta una carga de 50 usuarios concurrentes sin errores, pero muestra una 
degradación considerable en los tiempos de respuesta, especialmente en el percentil 95 y 99.

Esto indica que, si bien el sistema sigue siendo funcional, la experiencia del usuario 
puede verse afectada en escenarios de alta concurrencia.

Se recomienda analizar el comportamiento bajo cargas mayores y optimizar el rendimiento 
para mejorar la consistencia en los tiempos de respuesta.
