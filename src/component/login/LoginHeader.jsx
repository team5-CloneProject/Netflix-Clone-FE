import React, { useEffect, useRef } from 'react'
import { Link } from "react-router-dom";
import styled from 'styled-components';

const LoginHeader = () => {

  return (
    <HeaderWarp  className="hasBillboard">
        <Link to="/" className="link">
          <Logo
            id="Netflix_Logo_RGB"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1427 383.4"
          >
            <g id="Netflix_Logo_RGB-2" data-name="Netflix_Logo_RGB">
              <path d="m1102.06,347.88c20.06,1.54,40.09,3.18,60.09,4.96V.03h-60.09v347.85ZM135.37,216.98L57.11.03H0v383.36c19.99-2.85,40.02-5.57,60.09-8.18v-208.47l69.59,199.91c21.89-2.54,43.81-4.94,65.78-7.2V.03h-60.09v216.95Zm117.88,136.88c55.38-5.03,111.03-9.18,166.92-12.4v-59.22c-35.71,2.06-71.32,4.51-106.83,7.3v-89.64c23.3-.23,53.97-.94,81.15-.61v-59.21c-21.71-.05-56.61.3-81.15.62V59.78h106.83V.04h-166.92v353.82ZM458.69,59.77h62.89v276.88c20-.75,40.03-1.38,60.09-1.9V59.77h62.89V.03h-185.87v59.74Zm224.4,273.36h60.09v-136.72h81.46v-59.21h-81.46V59.78h107.66V.04h-167.75v333.1ZM1427,.03h-66l-43.51,100.85L1278.39.03h-65.01l69.86,180.21-76.27,176.79c21.1,2.06,42.15,4.25,63.16,6.57l44.36-102.79,43.93,113.31c22.88,2.94,45.71,6.01,68.49,9.26l.09-.04-78.28-201.89L1427,.03Zm-477.55-.03h-60.09v336.07c54.61,1.88,108.99,4.63,163.15,8.25v-59.21c-34.26-2.29-68.62-4.22-103.06-5.83V0Z" />
            </g>
          </Logo>
        </Link>
    </HeaderWarp>
  );
}

export default LoginHeader;

const HeaderWarp = styled.div`
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.8) 10%, transparent);
  height: 68px;
  padding: 30px 30px;
  position: fixed;
  width: 100%;
  display: flex;
  align-items: center;
  transition: all 0.2s;
`;

const Logo = styled.svg`
  fill: #e50914;
  width: 180px;
`;
