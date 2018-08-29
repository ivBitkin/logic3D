$(document).ready(function() { 
  let container, scene, camera, renderer;
  let material, mesh, geometry;
  
  init();
   
  animate();
   
function init(){
  camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 1, 1000 );
	camera.position.z = 400;

  scene = new THREE.Scene();

  geometry = new THREE.BoxGeometry( 200, 200, 200 );
  material = new THREE.MeshBasicMaterial( { color: 0xcccccc} );
  mesh = new THREE.Mesh( geometry, material );
  scene.add(mesh);

  container =  $('<div/>',{
    id: 'container'
});
  $('body').append( container );

renderer = new THREE.WebGLRenderer( { antialias: true } );
renderer.setPixelRatio( window.devicePixelRatio );
renderer.setSize( window.innerWidth, window.innerHeight );
container.append(renderer.domElement);

window.addEventListener( 'resize', onWindowResize, false );

}

function animate() {

  requestAnimationFrame( animate );
  render();
}
function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize( window.innerWidth, window.innerHeight );
}
function render(){
      mesh.rotation.x += 0.005;
      mesh.rotation.y += 0.01;
 			renderer.render(scene, camera);
 		}


});



