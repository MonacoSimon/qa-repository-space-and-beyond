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