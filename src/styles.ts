import styled from "styled-components";

interface IElevatorFloorButton {
  active: boolean;
}

interface IElevator {
  position: number;
}

export const Container = styled.div`
  display: flex;
  gap: 20px;
`;

export const ElevatorButtons = styled.div`
  display: flex;
  flex-direction: column;

  gap: 16px;
`;

export const Elevator = styled.div<IElevator>`
  background-color: tomato;
  height: 32px;
  width: 32px;
  transform: translateY(${({ position }) => `${position * 60}px`});

  transition: all 1000ms;
`;

export const ElevatorButton = styled.button<IElevatorFloorButton>`
  background-color: ${({ active }) => (active ? "purple" : "")};
`;
