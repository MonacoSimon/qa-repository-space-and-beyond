#!/bin/bash

echo "Verificando entorno..."

# Node
if command -v node &> /dev/null
then
    echo "Node.js OK"
else
    echo "Node.js NO instalado"
fi

# npm
if command -v npm &> /dev/null
then
    echo "npm OK"
else
    echo "npm NO instalado"
fi

echo "[4/5] Verificando Node.js y npm..."

if ! command -v node &> /dev/null; then
    echo "ERROR: Node.js no está instalado"
    echo ""
    echo "Ubuntu/Debian:"
    echo "  sudo apt update"
    echo "  sudo apt install nodejs npm"
    exit 1
fi

if ! command -v npm &> /dev/null; then
    echo "ERROR: npm no está instalado"
    exit 1
fi

echo "OK - $(node --version)"
echo "OK - npm $(npm --version)"
echo ""

echo "[5/5] Instalando dependencias de Cypress..."

if [ ! -d "automation/cypress" ]; then
    echo "ERROR: No existe automation/cypress"
    exit 1
fi

cd automation/cypress

if [ ! -f package.json ]; then
    echo "ERROR: package.json no encontrado"
    exit 1
fi

npm install

echo "OK - Dependencias instaladas"

cd ../..
echo ""

echo "==================================="
echo " Versiones instaladas"
echo "==================================="

docker --version
docker compose version
node --version
npm --version

echo ""
echo "==================================="
echo " Entorno listo"
echo "==================================="
echo ""
echo "Para ejecutar Cypress:"
echo "  cd automation/cypress"
echo "  npm run cypress:open"
echo "o"
echo "  npm run cypress:run"

# Java
if command -v java &> /dev/null
then
    echo "Java OK"
else
    echo "Java NO instalado"
fi

# Newman
if command -v newman &> /dev/null
then
    echo "Newman OK"
else
    echo "Newman NO instalado"
fi

# Lighthouse
if command -v lighthouse &> /dev/null
then
    echo "Lighthouse OK"
else
    echo "Lighthouse NO instalado"
fi

echo ""
echo "Validación finalizada"