import React from 'react'

import { SiCplusplus, SiPython, SiPytorch, SiTensorflow } from 'react-icons/si';
import { AiOutlineLineChart } from 'react-icons/ai';
import { FaBrain } from 'react-icons/fa';


import ImageGroup from '@/components/image_group';
import TechIcons from '@/components/skill-icons';

const KLA_3D_NAND = `${process.env.NEXT_PUBLIC_BASE_PATH}/home/KLA_3D_NAND.png`;
const kla_logo = `${process.env.NEXT_PUBLIC_BASE_PATH}/home/kla_logo.png`;
const KLA_c = `${process.env.NEXT_PUBLIC_BASE_PATH}/home/KLA_c.jpg`;
const microsoft = `${process.env.NEXT_PUBLIC_BASE_PATH}/home/microsoft.png`;
const QuEra = `${process.env.NEXT_PUBLIC_BASE_PATH}/home/QuEra.png`;
const oka = `${process.env.NEXT_PUBLIC_BASE_PATH}/home/oka.png`;
const imgGroup1 = [KLA_3D_NAND, kla_logo, KLA_c]
const imgGroup2 = [microsoft, QuEra, oka]
const imgGroupList = [imgGroup1,imgGroup2 ]

// Main HomePage Component
const Industry = () => {
  return (
    <div>
      <ExperiencePart />

    </div>
  )
}



interface JobContent {
  [key: string]: string[];
}

interface Job {
  company: string;
  title: string;
  location: string;
  startYear: string;
  endYear: string;
  manager: string;
  mentor: string;
  skillset: string;
  content: JobContent;
}


// Services Section
const ExperiencePart: React.FC = () => {


  const experienceList: Job[] = [
    {
      company: 'KLA Corporation',
      title: 'ML Algorithm Engineer Intern',
      location: 'Milpitas, CA',
      startYear: '05/2023',
      endYear: '08/2023',
      manager: 'Dr. Phillip Atkins',
      mentor: "Dr. Jinchuan Shi",
      skillset: "C/C++, Python, PyTorch, TensorFlow, Regression Analysis, EM Simulation, Deep Learning",
      content: {
        "Neural network solution for KLA AcuShape# chip architecture software": [
          "• Developed neural network to realize geometry critical dimension (CD) and spectra prediction/validation for Samsung V-NAND devices, substituting RCWA numerical method in the design loop.",
          "• Designed bidirectional-training networks to accomplish software library generation with an 80% smaller training dataset and better linearity performance."
        ],
        "Investigate effective device degree-of-freedom (DOF) reduction via generative AI ": [
          "• Built up a variational autoencoder-based model to effectively reconstruct and sample large DOF geometry critical dimensions (CD) of semiconductor devices into decreased DOF in compressed latent space.",
          "• Perturbed compressed DOF CDs during high-quality spectra output regression optimization and decreased 70% of regression iterations/simulation resource usage."
        ]
      }
    },
    {
      company: 'Xingyu Automotive Lighting Systems',
      title: 'Optical Engineer Intern',
      location: 'Changzhou, China',
      startYear: '09/2017',
      endYear: '05/2018',
      manager: '',
      mentor: "",
      skillset: "C/C++, Ansys, Zemax, SolidWorks, AutoCAD, EM Simulation, Comsol, Matlab",
      content: {
        "High-pixel digital lighting unit design": [
          "• Applied 3D modeling and optical trace simulations to design high-pixel, independently adjustable LED light matrices.",
          "• Developed customized lighting projection functions for driving assistance in BMW lighting system team."
        ]
      }
    }
  ];
  return (
    <div className="  mt-10 ">
      <div className="education-container">
        {experienceList.length > 0 ? (
          experienceList.map((job, index) => (
            <div key={index} className="education-entry">
              <div className='flex justify-between'>
                <div>
                  <strong>{job.title}, </strong> <i>{job.location}</i>
                  <span> ({job.company})</span>
                </div>
                <span> {job.startYear} - {job.endYear}</span>
              </div>
              {job.skillset && <TechIcons skills={job.skillset} />}

              {job.mentor && <div>Mentor: {job.mentor}</div>}
              {job.manager && <p>Manager: {job.manager}</p>}
              {job.skillset && <div>Skills: {job.skillset}</div>}
              {Object.keys(job.content).map((key, index) => (
                <div key={index}>
                  <p className='font-[600]'>{key}</p>
                  {job.content[key].map((list, i) => (
                    <div key={i}>{list}</div>
                  ))}
                </div>
              ))}
              <ImageGroup imgGroup={imgGroupList[index]}/>
            </div>
          ))
        ) : (
          <p>No education information available.</p>
        )}
      </div>
    </div>
  );
}


export default Industry



