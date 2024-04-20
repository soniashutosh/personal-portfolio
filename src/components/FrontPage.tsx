import { OrbitControls } from "@react-three/drei";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { Suspense, useRef } from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { TbBrandLeetcode } from "react-icons/tb";
import { Mesh } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import AnimatedButton from "./AnimatedButton";
import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "./ui/text-reveal-card";

function MeshComponent() {
  const fileUrl = "/model.gltf";
  const mesh = useRef<Mesh>(null!);
  const gltf = useLoader(GLTFLoader, fileUrl);

  useFrame(() => {
    // if want to rotate 3D Model
    // mesh.current.rotation.y += 0.01;
    mesh.current.rotation.y = -0.5;
  });

  return (
    <Suspense fallback={<div className="bg-black"></div>}>
      <mesh ref={mesh}>
        <primitive object={gltf.scene} scale={[1.5, 1.5, 1.5]} />
      </mesh>
    </Suspense>
  );
}

const FrontPage = () => {
  return (
    <>
      <div className="flex sm:flex-row flex-col sm:min-h-lvh min-h-0">
        <div className="flex-1 flex-col xl:px-0 sm:pt-[3%] pt-0">
          <div className="flex flex-row justify-center items-center w-full sm:pt-20 pt-5">
            <TextRevealCard
              text="I'm front-end developer"
              revealText="I'm backend developer"
            >
              <div className="flex-1 font-poppins font-normal ss:text-[72px] text-[45px] text-white ss:leading-[100px] leading-[74px]">
                <TextRevealCardDescription className="sm:text-[50px] text-[30px] sm:pb-6 pb-0">
                  Hi, I am
                </TextRevealCardDescription>
                <TextRevealCardTitle className="text-gradient sm:text-[80px] text-[50px]">
                  Ashutosh Soni
                </TextRevealCardTitle>
              </div>
            </TextRevealCard>
          </div>
          <div className="sm:px-10 px-3 sm:pb-0 pb-3 sm:pt-3 pt-0">
            <AnimatedButton text="Download Resume" link="../../resume.pdf" />
          </div>
          <div className="sm:px-20 px-8 flex flex-row pb-12 sm:pt-10 pt-0">
            <p className="text-white mr-8 text-lg">Connect Me : </p>
            <a href="https://www.linkedin.com/in/ashutosh-soni-2a40a9174/">
              <FaLinkedinIn className="h-6 w-6 text-blue-300 hover:text-blue-400 sm:mr-12 mr-8" />
            </a>
            <a href="https://github.com/soniashutosh">
              <IoLogoGithub className="h-6 w-6 text-blue-300 hover:text-blue-400  sm:mr-12 mr-8" />
            </a>
            <a href="https://leetcode.com/soniAshutosh/">
              <TbBrandLeetcode className="h-6 w-6 text-blue-300 hover:text-blue-400" />
            </a>
          </div>
        </div>

        <div className="flex-1 sm:flex hidden justify-center items-center sm:pt-[5%] pt-0 relative overflow-hidden">
          <Canvas
            className="h-[100%] w-[100%]"
            camera={{ fov: 8, position: [0, 10, 37] }}
          >
            <OrbitControls />
            <ambientLight />
            <pointLight position={[0, 10, 10]} />
            <MeshComponent />
          </Canvas>
        </div>
      </div>
    </>
  );
};

export default FrontPage;
