function addElement() {
    const lista = document.getElementById('lista');
    const newItem = document.createElement('li');
    newItem.className = 'list-group-item';
    newItem.textContent = `Elemento ${lista.children.length + 1}`;
    lista.appendChild(newItem);
  }