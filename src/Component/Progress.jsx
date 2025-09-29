import React from "react";
import Container from "./Container";

const Progress = ({ inProgress = 0, resolved = 0 }) => {
  return (
    <Container>
      <div>
        <div className=" flex flex-col mx-auto gap-6 md:flex-row  my-20 ">
          <div className="text-center space-y-4 p-10 grow rounded-lg relative overflow-hidden bg-gradient-to-b from-[#632ee3] to-[#9f62f2] after:absolute after:inset-0 after:bg-[url('assets/vector1.png')] after:bg-contain after:bg-no-repeat before:absolute before:inset-0 before:bg-[url('assets/vector1.png')] before:bg-contain before:bg-no-repeat before:scale-x-[-1]">
            <div>
              <h2 className="text-2xl text-white font">In-Progress</h2>
              <span className="text-white font-semibold text-6xl">
                {inProgress}
              </span>
            </div>
          </div>

          <div className="text-center space-y-4 p-10 grow rounded-lg relative overflow-hidden bg-gradient-to-r from-[#54CF68] to-[#00827A] after:absolute after:inset-0 after:bg-[url('assets/vector1.png')] after:bg-contain after:bg-no-repeat before:absolute before:inset-0 before:bg-[url('assets/vector1.png')] before:bg-contain before:bg-no-repeat before:scale-x-[-1]">
            <div>
              <h2 className="text-2xl text-white font">Resolved</h2>
              <span className="text-white font-semibold text-6xl">
                {resolved}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Progress;
