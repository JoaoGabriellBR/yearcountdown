import { useState, useEffect } from "react";
import { GridContainer, DivDate, RightBox, LeftBox } from "./styles";
import rocket from "../assets/rocket.png";

function YearCountdown() {
  const [days, setDays] = useState<number>(0);
  const [hours, setHours] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(0);
  const [seconds, setSeconds] = useState<number>(0);

  useEffect(() => {
    const countdown = setInterval(() => {
      const currentDate = new Date();
      const newYear = new Date(currentDate.getFullYear() + 1, 0, 1);
      const difference = newYear.getTime() - currentDate.getTime();
      setDays(Math.floor(difference / (1000 * 60 * 60 * 24)));
      setHours(Math.floor((difference / (1000 * 60 * 60)) % 24));
      setMinutes(Math.floor((difference / (1000 * 60)) % 60));
      setSeconds(Math.floor((difference / 1000) % 60));
    }, 1000);

    return () => clearInterval(countdown);
  }, []);

  return (
    <GridContainer>
      <LeftBox>
        <div className="div-content">
          <h1>CONTAGEM DE ANO NOVO</h1>

          <DivDate>
            <div className="div-date-item">
              <div className="date-item-header">
                <h1>{days < 10 ? "0" + days : days}</h1>
              </div>

              <div className="date-item-footer">
                <h3>DIAS</h3>
              </div>
            </div>

            <div className="div-date-item">
              <div className="date-item-header">
                <h1>{hours < 10 ? "0" + hours : hours}</h1>
              </div>

              <div className="date-item-footer">
                <h3>HORAS</h3>
              </div>
            </div>

            <div className="div-date-item">
              <div className="date-item-header">
                <h1>{minutes < 10 ? "0" + minutes : minutes}</h1>
              </div>

              <div className="date-item-footer">
                <h3>MINUTOS</h3>
              </div>
            </div>

            <div className="div-date-item">
              <div className="date-item-header">
                <h1>{seconds < 10 ? "0" + seconds : seconds}</h1>
              </div>

              <div className="date-item-footer">
                <h3>SEGUNDOS</h3>
              </div>
            </div>
          </DivDate>
        </div>
      </LeftBox>
      <RightBox>
        <img
          className="img"
          src={rocket}
          alt="Astronauta em um foguete"
          loading="lazy"
        />
      </RightBox>
    </GridContainer>
  );
}

export default YearCountdown;
