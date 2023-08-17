import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import "./Demo1.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Demo from "./Demo";

const Demo1 = () => {
  const navigate = useNavigate();
  const [employees, setEmployees] = useState([]);
  const [unavailable,setUnavailable]=useState([]);
  const arr=[1,2,3,4,5,6,76]
  const getEmployeeData = () => {
    console.log(1);
    axios
      .get(
        "http://localhost:9999/api/v1/slot/getspecificstoreemployeesforslot/64c3c39d3d3620f87113fea8"
      )
      .then((data) => {
        setEmployees(data.data.availableEmployee);
        setUnavailable(data.data.unAvailable);
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  console.log(unavailable);
  var unavailableEmployee='';
  // employees.unAvailable?.map((e)=>{
  //   setUnavailable(e);
  // })
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({});
  function timeToMilliseconds(openingTime, closingTime) {
    const openingHour = parseInt(openingTime.split(":")[0]);
    const openingMinute = parseInt(openingTime.split(":")[1]);
    const closingHour = parseInt(closingTime.split(":")[0]);
    const closingMinute = parseInt(closingTime.split(":")[1]);
    console.log(openingHour);
    console.log(openingMinute);
    console.log(closingHour);
    console.log(closingMinute);

    const openingDate = new Date();
    openingDate.setHours(openingHour, openingMinute, 0, 0);

    const closingDate = new Date();
    closingDate.setHours(closingHour, closingMinute, 0, 0);

    const openingTimeMilliseconds = openingDate.getTime();
    const closingTimeMilliseconds = closingDate.getTime();

    return {
      opening: openingTimeMilliseconds,
      closing: closingTimeMilliseconds,
    };
  }
  const gettime=(date,openingTime,closingTime)=>{

  }
  var schedules = [];
  const [newS, setNewS] = useState([]);
  // const [threeDays,setThreeDays]=useState([]);
  const [threeDays,setThreeDays]=useState([]);
  const timming = (open, close) => {
    var start=0
    // var date='';
    for(let i=0;i<3;i++)
    {
      console.log(2);
      const date=new Date(today.getTime() + start);
      start+=24 * 60 * 60 * 1000;
      console.log(date,"and",threeDays);
      setThreeDays([...threeDays,date]);
      // setThreeDays([...threeDays,date])
    }
    // console.log("THREE DAYS",threeDays);
    // const { opening, closing } = timeToMilliseconds(open, close);
    // console.log(opening,closing)
    // const dayCount = 3; // Number of days for the schedule
    // const timeSlotDurationInMilliseconds = 30 * 60 * 1000; // 30 minutes in milliseconds

    // for (let day = 0; day < dayCount; day++) {
    //   const schedule = [];

    //   let currentTime = opening + day * 24 * 60 * 60 * 1000; // Add days in milliseconds

    //   while (currentTime < closing + day * 24 * 60 * 60 * 1000) {
    //     schedule.push(new Date(currentTime));
    //     currentTime += timeSlotDurationInMilliseconds;
    //   }
    //   schedules.push(schedule);
    // }
    // const arr=[];
    // for(let time=opening+1*24*60*60*1000;time<closing+1*24*60*60*1000;time+=timeSlotDurationInMilliseconds)
    // {
    //   arr.push(new Date(time));
    // }
    // console.log("MY TIME IS ",arr);
    // setNewS(schedules);
  };
  var day = 0;
  const submit = (data) => {
    console.log("!2345");
    console.log(data);
  };
  var today = new Date();
  const [date, setDate] = useState(today.getDate());
  const monthName = {
    0: "Jan",
    1: "Feb",
    2: "March",
    3: "April",
    4: "May",
    5: "June",
    6: "July",
    7: "Aug",
    8: "Sep",
    9: "Oct",
    10: "Nov",
    11: "Dec",
  };
  const weekDay = {
    0: "Sun",
    1: "Mon",
    2: "Tue",
    3: "Wed",
    4: "Thur",
    5: "Fri",
    6: "Sat",
  };
  const handleButtonClick = (day, id) => {
    // const btnId = `${day}${id}`;
    // console.log(day);
    // console.log(id);
    // console.log(btnId);
    const buttons = document.querySelectorAll(".radio__btn");
    for (let i = 0; i < buttons.length; i++) {
      // console.log("btnid ",buttons[i].id)
      if (buttons[i].id === id) {
        buttons[i].classList.add("click");
      } else {
        buttons[i].classList.remove("click");
      }
    }
  };
  const getData = () => {
    axios
      .get(
        "http://localhost:9999/api/v1/businessform/getbusinessdata/64c3c39d3d3620f87113fea8"
      )
      .then((response) => {
        console.log("TIME IS",response.data.data);
        timming(response.data.data.openingTime, response.data.data.closingTime);
      })
      .catch((error) => {
        if (error.response) {
          // The request was made, but the server responded with an error status code
          console.log("Status Code:", error.response.status);
          if (error.response.status === 500) navigate("/error500");
          console.log("Response Data:", error.response.data);
        } else if (error.request) {
          // The request was made, but no response was received
          console.log("No response received:", error.request);
          navigate("/error500");
        } else {
          // Something else happened while setting up the request
          console.log("Error:", error.message);
        }
      });
  };
  useEffect(() => {
    getData();
    getEmployeeData();
  }, []);
  const selectEmp = (empId) => {
    const empid = empId;
    selectedEmployee=empId;
    const emp = document.querySelectorAll(".radio__emp");
    unavailableEmployee=unavailable.filter((e)=>{
      if(e.employeeId==empId)
      {return true}
      return false
    });
    console.log(unavailableEmployee[0]?.startTime,"is unavailable");
    for (let i = 0; i < emp.length; i++) {
      if (emp[i].id === empid) {
        console.log(1);
        emp[i].classList.add("click");
      } else {
        emp[i].classList.remove("click");
      }
    }
  };
  const selectDates = (date) => {
    const dates = document.querySelectorAll(".radio__date");
    console.log(date);
    for (let i = 0; i < dates.length; i++) {
      if (dates[i].id=== date) {
        dates[i].classList.add("click");
      } else {
        dates[i].classList.remove("click");
      }
    }
  };


  const timer = (timer) => {
    console.log(timer);
  };
  var selectedDate = "";
  var employeeLodaed = 0;
  var selectedEmployee='';
  
  // const [time,setTime]
  return (
    <div>
      {/* <Demo/> */}
      {new Date().toLocaleDateString()}
      <h1>Schedules for 3 days:</h1>
      <div className="schedule">
        {console.log("TTTT",threeDays)}
        {threeDays.map((e) => {
          console.log(e)
          day += 1;
          employeeLodaed += 1;
          // selectedDate = e[0].getDate();
          // console.log("THE TIMEEEE",e[0].getTime());
          return (
            <h1>
              <div className="choose__dates ">
                <button
                  // className="radio__date"
                  // id={e[0].getDate()}
                  // onClick={() => {
                  //   selectDates(e[0].getDate());setDate(e[0].getDate());setValue("date", e[0].getDate());
                  // }}
                  // name="date"
                  // value={e[0].getDate()}
                  // {...register("date")}
                  // selectDates(e[0].getDate())
                >
                  {e[0]}
                  {/* <div>{weekDay[e.getDay()]},</div>
                  <div>{monthName[e.getMonth()]}</div>
                  <div>{e.getDate()}</div> */}
                </button>
              </div>
              {/* <div className="choose__employee">
                {employeeLodaed === 1 &&
                  employees?.map((emp) => {
                    return (
                      <button
                        key={emp._id}
                        onClick={()=>{selectEmp(emp._id);setValue("employee", e._id);}}
                        name="employee"
                        className="radio__emp"
                        id={emp._id}
                        value={emp._id}
                        {...register("employee")}
                      >
                        {emp.employeeName}
                      </button>
                    );
                  })}
              </div>
              <div className="choose__time">
                {threeDays?.map((h) => {
                  const time =
                    h.toLocaleTimeString().slice(0, -6) +
                    h.toLocaleTimeString().slice(-3);
                  day++;
                  if (h.getDate() === date) {
                    return (
                      <h1 className="choose__time">
                        <button
                          type="radio"
                          name="init"
                          id={time}
                          className="radio__btn"
                          {...register("init")}
                          onClick={() => {handleButtonClick(day, time);setValue('init',time);}}
                        >
                          {h.toLocaleTimeString().slice(0, -6) +
                            h.toLocaleTimeString().slice(-3)}
                        </button>
                        {/* {console.log(h)}
                      </h1>
                    );
                  }
                })}
              </div> */}
            </h1>
          );
        })}
      </div>
      <form onSubmit={handleSubmit(submit)}>
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default Demo1;

//
