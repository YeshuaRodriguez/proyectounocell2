document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('nuevo-formulario');
    const contenedor = document.getElementById('contenedorPosts');

    const postsGuardados = JSON.parse(localStorage.getItem('posts')) || [];
    postsGuardados.forEach(post => renderPost(post, contenedor));

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const titulo = document.getElementById('idTitulo').value;
        const articulo = document.getElementById('idArticulo').value;
        const fecha = new Date().toLocaleDateString('es-ES');

        const nuevo = { titulo, articulo, fecha };

        postsGuardados.push(nuevo);
        localStorage.setItem('posts', JSON.stringify(postsGuardados));

        renderPost(nuevo, contenedor);

        form.reset();
    });

    function renderPost(post, contenedor) {
        const nuevoPost = document.createElement('article');
        nuevoPost.classList.add('blog-post');

        nuevoPost.innerHTML = `
            <h3>${post.titulo}</h3>
            <p>Fecha de publicación: ${post.fecha}</p>
            <p>${post.articulo}</p>
        `;

        contenedor.appendChild(nuevoPost);
    }
});
