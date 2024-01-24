import { useState } from "react";
import "./App.css";
import * as S from "./styles";

function App() {
  const elevator: number[] = [0, 1, 2, 3, 4, 5];

  const randomPosition = elevator[Math.floor(Math.random() * elevator.length)];

  const [currentFloors, setCurrentFloors] = useState<number[]>([
    randomPosition,
  ]);

  const [nextPosition, setNextPosition] = useState<number>(randomPosition);

  const handleSetActiveFloor = (currentActiveFloor: number) => {
    setCurrentFloors([currentActiveFloor]);
  };

  return (
    <S.Container>
      <S.Elevator position={nextPosition} />

      <S.ElevatorButtons>
        {elevator.map((elevatorFloor) => {
          return (
            <S.ElevatorButton
              active={currentFloors.includes(elevatorFloor)}
              onClick={() => {
                handleSetActiveFloor(elevatorFloor);
                setNextPosition(elevatorFloor);
              }}
            >
              {elevatorFloor}
            </S.ElevatorButton>
          );
        })}
      </S.ElevatorButtons>
    </S.Container>
  );
}

export default App;
