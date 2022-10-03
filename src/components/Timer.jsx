import { TriangleDownIcon, TriangleUpIcon } from "@chakra-ui/icons";
import {
  CircularProgress,
  CircularProgressLabel,
  Flex,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useHours } from "../context/hoursContext";
import { useMinutes } from "../context/minutesContext";
import { useSeconds } from "../context/secondsContext";

const Timer = ({ chooseTime }) => {
  const { seconds, setSeconds } = useSeconds();
  const { minutes, setMinutes } = useMinutes();
  const { hours, setHours } = useHours();

  return (
    <Flex direction={"row"} justifyContent={"center"} gap={"8rem"}>
      <Flex direction={"column"} alignItems={"center"}>
        <TriangleUpIcon
          marginBottom={4}
          w={"30px"}
          h={"30px"}
          cursor={"pointer"}
          onClick={() => {
            if (chooseTime) {
              setHours(hours + 1);
              if (hours === 24) {
                setHours(0);
              }
            }
          }}
        />

        <CircularProgress
          color="gray.500"
          value={hours}
          max={24}
          size="100px"
          thickness="4px"
        >
          <CircularProgressLabel>
            {hours <= 9 ? `0${hours}` : `${hours}`}
          </CircularProgressLabel>
        </CircularProgress>
        <Text textAlign={"center"} fontSize={"2xl"}>
          Horas
        </Text>

        <TriangleDownIcon
          marginTop={4}
          w={"30px"}
          h={"30px"}
          cursor={"pointer"}
          onClick={() => {
            if (chooseTime) {
              setHours(hours - 1);
              if (hours === 0) {
                setHours(24);
              }
            }
          }}
        />
      </Flex>

      {/* Minutos */}
      <Flex direction={"column"} alignItems={"center"}>
        <TriangleUpIcon
          marginBottom={4}
          w={"30px"}
          h={"30px"}
          cursor={"pointer"}
          onClick={() => {
            if (chooseTime) {
              setMinutes(minutes + 1);
              if (minutes === 59) {
                setMinutes(0);
              }
            }
          }}
        />

        <CircularProgress
          color="gray.500"
          value={minutes}
          max={59}
          size="100px"
          thickness="4px"
        >
          <CircularProgressLabel>
            {minutes <= 9 ? `0${minutes}` : `${minutes}`}
          </CircularProgressLabel>
        </CircularProgress>
        <Text textAlign={"center"} fontSize={"2xl"}>
          Minutos
        </Text>

        <TriangleDownIcon
          marginTop={4}
          w={"30px"}
          h={"30px"}
          cursor={"pointer"}
          onClick={() => {
            if (chooseTime) {
              setMinutes(minutes - 1);
              if (minutes === 0) {
                setMinutes(59);
              }
            }
          }}
        />
      </Flex>

      {/* Segundos */}
      <Flex direction={"column"} alignItems={"center"}>
        <TriangleUpIcon
          marginBottom={4}
          w={"30px"}
          h={"30px"}
          cursor={"pointer"}
          onClick={() => {
            if (chooseTime) {
              setSeconds(seconds + 1);
              if (seconds === 59) {
                setSeconds(0);
              }
            }
          }}
        />

        <CircularProgress
          color="gray.500"
          size="100px"
          thickness="4px"
          value={seconds}
          max={59}
        >
          <CircularProgressLabel>
            {seconds <= 9 ? `0${seconds}` : `${seconds}`}
          </CircularProgressLabel>
        </CircularProgress>
        <Text textAlign={"center"} fontSize={"2xl"}>
          Segundos
        </Text>

        <TriangleDownIcon
          marginTop={4}
          w={"30px"}
          h={"30px"}
          cursor={"pointer"}
          onClick={() => {
            if (chooseTime) {
              setSeconds(seconds - 1);
              if (seconds === 0) {
                setSeconds(59);
              }
            }
          }}
        />
      </Flex>
    </Flex>
  );
};

export default Timer;
