# Performance Analysis Report – Test con 100 usuarios

## Objetivo

Evaluar el comportamiento del sistema bajo una carga alta de 100 usuarios concurrentes, 
analizando la degradación del rendimiento, estabilidad y capacidad de respuesta.

---

## Métricas obtenidas

* Usuarios concurrentes: 100
* Tiempo promedio (average): 375 ms
* Tiempo mínimo (min): 21 ms
* Tiempo máximo (max): 2401 ms
* Mediana (median): 213 ms
* Percentil 90 (P90): 991 ms
* Percentil 95 (P95): 1482 ms
* Percentil 99 (P99): 1983 ms
* Tasa de error: 0 %
* Throughput: 3.2 requests/segundo

---

## Análisis de resultados

### Tiempo de respuesta

El tiempo promedio de 375 ms muestra un aumento considerable respecto a cargas menores, 
indicando una degradación del rendimiento.

La mediana (213 ms) se mantiene en valores aceptables, lo que sugiere que una parte de las solicitudes sigue siendo relativamente rápida, pero existe una cantidad significativa 
de respuestas lentas que elevan el promedio.

El tiempo máximo de 2401 ms evidencia demoras importantes en determinados casos.

---

### Percentiles

* P90: 991 ms
* P95: 1482 ms
* P99: 1983 ms

Los percentiles reflejan una degradación clara:

* el 90 % de las solicitudes ya se acerca al segundo
* el 95 % supera ampliamente ese valor
* el 99 % presenta tiempos cercanos a los 2 segundos

Esto indica una alta variabilidad y pérdida de consistencia en el rendimiento.

---

### Estabilidad

La tasa de error se mantiene en 0 %, lo que indica que:

* el sistema sigue respondiendo todas las solicitudes
* no se presentan fallos funcionales

Sin embargo, los tiempos de respuesta elevados afectan la experiencia del usuario.

---

### Throughput

El throughput de 3.2 requests por segundo es el más alto registrado, lo que indica 
que el sistema procesa más solicitudes.

Sin embargo, este aumento viene acompañado de una degradación en los tiempos de respuesta.

---

## Análisis general

El sistema logra sostener una carga de 100 usuarios concurrentes sin errores, 
pero presenta una degradación significativa en el rendimiento.

Se observa:

* incremento notable en los tiempos de respuesta
* alta variabilidad en percentiles altos
* presencia de demoras que impactan la experiencia del usuario

Esto indica que el sistema está operando cerca de su límite de capacidad.

---

## Conclusión

El sistema es capaz de manejar una carga de 100 usuarios concurrentes sin fallos, 
pero con un impacto considerable en los tiempos de respuesta.

La experiencia del usuario se ve afectada debido a la latencia elevada en una proporción 
significativa de las solicitudes.

Se recomienda optimizar el rendimiento y evaluar estrategias de escalabilidad para 
mejorar la estabilidad bajo cargas altas.
