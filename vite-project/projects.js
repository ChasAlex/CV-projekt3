import './style.css';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';


// Setup

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);
camera.position.setX(-3);

renderer.render(scene, camera);




// Lights

const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(5, 5, 5);

const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(pointLight, ambientLight);

// Helpers

// const lightHelper = new THREE.PointLightHelper(pointLight)
// const gridHelper = new THREE.GridHelper(200, 50);
// scene.add(lightHelper, gridHelper)

// const controls = new OrbitControls(camera, renderer.domElement);

function addStar() {
  const geometry = new THREE.SphereGeometry(0.25, 24, 24);
  const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
  const star = new THREE.Mesh(geometry, material);

  const [x, y, z] = Array(3)
    .fill()
    .map(() => THREE.MathUtils.randFloatSpread(100));

  star.position.set(x, y, z);
  scene.add(star);
}

Array(200).fill().forEach(addStar);

// Background

const spaceTexture = new THREE.TextureLoader().load('/black.jpg');
scene.background = spaceTexture;

// Avatar

const project1Texture = new THREE.TextureLoader().load('/project1_music.jpg');

const project1 = new THREE.Mesh(new THREE.BoxGeometry(3, 3, 3), new THREE.MeshBasicMaterial({ map: project1Texture }));

scene.add(project1);


const project2Texture = new THREE.TextureLoader().load('/Ski3.JPG');
const project2 = new THREE.Mesh(new THREE.BoxGeometry(3, 3, 3), new THREE.MeshBasicMaterial({ map: project2Texture }));
scene.add(project2);


const project3Texture = new THREE.TextureLoader().load('/project3_pizza.jpg');
const project3 = new THREE.Mesh(new THREE.BoxGeometry(3, 3, 3), new THREE.MeshBasicMaterial({ map: project3Texture }));
scene.add(project3);

const project4Texture = new THREE.TextureLoader().load('/project4_personal.jpg');
const project4 = new THREE.Mesh(new THREE.BoxGeometry(3, 3, 3), new THREE.MeshBasicMaterial({ map: project4Texture }));
scene.add(project4);

//const project5Texture = new THREE.TextureLoader().load('public/Me1.jpg');
//const project5 = new THREE.Mesh(new THREE.BoxGeometry(3, 3, 3), new THREE.MeshBasicMaterial({ map: project5Texture }));
//scene.add(project5); 





//positioning the projects

//project5.position.z = 30;
//project5.position.x = 2;
//project5.position.y = 0;



project4.position.z = 28;
project4.position.x = 2;
project4.position.y = 0;



project3.position.z = 19;
project3.position.x = 2;
project3.position.y = 0;


project2.position.z = 10;
project2.position.x = 2;
project2.position.y = 0;

project1.position.z = 3;
project1.position.x = 2;
project1.position.y = 0;

// Scroll Animation

function moveCamera() {
  const t = document.body.getBoundingClientRect().top;

  project1.rotation.y += 0.01;
  project1.rotation.z += 0.01;
  project2.rotation.y += 0.01;
  project2.rotation.z += 0.01;
  project3.rotation.y += 0.01;
  project3.rotation.z += 0.01;
  project4.rotation.y += 0.01;
  project4.rotation.z += 0.01;
  //project5.rotation.y += 0.01;
  //project5.rotation.z += 0.01;

  camera.position.z = t * -0.01;
  camera.position.x = t * -0.0000;
  camera.rotation.y = t * -0.0000;
}

document.body.onscroll = moveCamera;
moveCamera();

// Animation Loop

function animate() {
  requestAnimationFrame(animate);
 

  project1.rotation.y += 0.003;
  project1.rotation.z += 0.002;
  project2.rotation.y += 0.003;
  project2.rotation.z += 0.002;
  project3.rotation.y += 0.003;
  project3.rotation.z += 0.002;
  project4.rotation.y += 0.003;
  project4.rotation.z += 0.002;
  //project5.rotation.y += 0.003;
  //project5.rotation.z += 0.002;

  // controls.update();

  renderer.render(scene, camera);
}

animate();

