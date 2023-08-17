import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import "./Demo1.css";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/CartSlice";

const Demo2 = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [employees, setEmployees] = useState([]);
  const [unavailable, setUnavailable] = useState([]);
  const [slot, setSlot] = useState([]);
  const [userSelectSlot, setUserSelectSlot] = useState("");
  var [openTime, setOpenTime] = useState("");
  var [closeTime, setCloseTime] = useState("");
  const [isAvailable, setIsAvailable] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({});


  const value = location.state?.value;
  // const serviceData=[{name:'sdfg'}];
  const serviceData = location.state?.Id;
  console.log("THE VALUE", value);
  // console.log(location.state);
  // const serviceId=location.state?.value
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
  var today = new Date();
  const [date, setDate] = useState(today.getDate());
  var unavailableEmployee = "";
  const [dates, setDates] = useState([]);
  const [employee, setEmployee] = useState('')
  const [error, setError] = useState('')
  const dispatch = useDispatch()
  const store = useSelector((state) => state)
  const [cartData, setCartData] = useState([])
  var [slotTaken,setSlotTaken]=useState([])
  var [employeeSlot,setEmployeeSlot]=useState([])
  
  // var slotTaken = []
  // console.log(value)

  function timeToMilliseconds(openingTime, closingTime, todate) {
    const openingHour = parseInt(openingTime.split(":")[0]);
    const openingMinute = parseInt(openingTime.split(":")[1]);
    const closingHour = parseInt(closingTime.split(":")[0]);
    const closingMinute = parseInt(closingTime.split(":")[1]);

    console.log(openingMinute);
    // if (todate == date.toLocaleDateString('en-GB') && date.getHours() > openingHour && date.getHours() < closingHour) {

    // }
    console.log(openingTime, closingTime, todate);
    const fulldate = todate.split("/");
    const d = parseInt(fulldate[0], 10);
    const m = parseInt(fulldate[1], 10);
    const y = parseInt(fulldate[2]);
    // console.log(d, m, y);
    const openingDate = new Date(y, m - 1, d);
    // console.log("openingDate", openingDate)
    openingDate.setHours(openingHour, openingMinute, 0, 0);

    const closingDate = new Date(y, m - 1, d);
    closingDate.setHours(closingHour, closingMinute, 0, 0);

    const openingTimeMilliseconds = openingDate.getTime();
    const closingTimeMilliseconds = closingDate.getTime();

    return {
      opening: openingTimeMilliseconds,
      closing: closingTimeMilliseconds,
    };
  }

  const timming = (open, close, todate) => {
    // console.log("todate", todate);
    var slots = []
    // console.log("fgbn", open, close);
    // console.log("slotTaken", slotTaken)
    var { opening, closing } = timeToMilliseconds(open, close, todate);
    // console.log("opentime ", opening, closing);
    var slots = [];
    var date = new Date();
    var totalTime=0
    store.service?.value?.map((e)=>{
      totalTime+=e.time
    })
    console.log("totalTime",totalTime)
    while (opening < closing) {
      // console.log(opening)
      if (todate == date.toLocaleDateString('en-GB') && date.getTime() < opening && date.getTime() < closing)
        slots.push(opening)
      else if (todate.split("/")[0] > date.getDate())
        slots.push(opening)
      // opening += `${totalTime}` * 60 * 1000;
      opening+=30*60*1000
    }
    setSlot(slots);
  };

  const isInRange = (time, emptime) => {
    // console.log("start tf",time>=emptime.starttime,"end tf" ,time<=emptime.endtime);
    // console.log("time",new Date(time))
    // console.log("empstartTime",new Date(emptime.starttime))
    // console.log("empendTime",new Date(emptime.endtime))
    return time >= emptime.starttime && time <= emptime.endtime;
  };



  const getEmployeeData = () => {
    axios
      .get(
        "http://localhost:9999/api/v1/slot/getspecificstoreemployeesforslot/" +
          value
      )
      .then((data) => {
        // console.log(data)
        setEmployees(data.data.availableEmployee);
        setUnavailable(data.data.unAvailable);
      })
      .catch((error) => {
        console.log(error);
        errorss(error)
      });
  };

  const getData = () => {
    if (value === undefined) {
      navigate("/store");
    } else {
      axios
        .get(
          "http://localhost:9999/api/v1/businessform/getbusinessdata/" + value
        )
        .then((response) => {
          setOpenTime(response.data.data.openingTime);
          setCloseTime(response.data.data.closingTime);
          timming(
            response.data.data.openingTime,
            response.data.data.closingTime,
            new Date().toLocaleDateString("en-GB")
          );
        })
        .catch((error) => {
          errorss(error)
        });

      axios.get('http://localhost:9999/api/v1/appointment/getthreedayappointment').then((data) => {
        console.log("cartData", data)
        setCartData(data.data.data)
      }).catch((error) => {
        errorss(error)
      })
    }

  };

  const errorss = (error) => {
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
  }
  useEffect(() => {
    getData();
    getEmployeeData();
  }, []);

  useEffect(() => {
    const today = new Date();
    // today.getMilliseconds
    const tomorrow = new Date(today);
    // today.toLocaleDateString
    tomorrow.setDate(today.getDate() + 1);
    const dayAfterTomorrow = new Date(today);
    dayAfterTomorrow.setDate(today.getDate() + 2);

    setDates([today, tomorrow, dayAfterTomorrow]);
  }, []);

  const selectDates = (date) => {
    const dates = document.querySelectorAll(".radio__date");
    for (let i = 0; i < dates.length; i++) {
      if (dates[i].id === date.toString()) {
        dates[i].classList.add("click");
      } else {
        dates[i].classList.remove("click");
      }
    }
  };
  const selectEmp = (empId) => {
    const empid = empId;

    const emp = document.querySelectorAll(".radio__emp");
    unavailableEmployee = unavailable.filter((e) => e.employeeId == empid);
    if (unavailableEmployee.length > 0) {
      setIsAvailable(unavailableEmployee);
    } else {
      setIsAvailable(null);
    }
    for (let i = 0; i < emp.length; i++) {
      if (emp[i].id === empid) {
        emp[i].classList.add("click");
      } else {
        emp[i].classList.remove("click");
      }
    }
  };
  const handleButtonClick = (id) => {
    if (employee == "")
      setError("Please Select Employee and Then Go further")
    else {
      setError("");
      const buttons = document.querySelectorAll(".radio__btn");
      for (let i = 0; i < buttons.length; i++) {
        if (buttons[i].id === id.toString()) {
          buttons[i].classList.add("click");
        } else {
          buttons[i].classList.remove("click");
        }
      }
    }
  };
  const [appointment, setAppointment] = useState([]);
  const submit = (data) => {
    // console.log("!2345");
    console.log(data);
    // console.log(userSelectSlot)
    if (userSelectSlot === "") {
      setError("Please Select any one of the Available slot");
    } else {
      var servicePrice = 0;
      var appointmentTime = 0;
      const appointmentData = serviceData.map((e) => {
        servicePrice += e.price;
        appointmentTime += e.time;
        return 1;
      });
      data = {
        userId:'64c152b6161a56673befac21',
        serviceId: store.service.value,
        employeeId:data.employee,
        adminId: value,
        date: data.date,
        startTime: parseInt(data.init),
        totalTime: appointmentTime,
        totalPrice: servicePrice,
        discount: 0,
      };
      axios
        .post("http://localhost:9999/api/v1/cart/addtocart", data, {
          headers: {
            user: localStorage.getItem("qwerty"),
          },
        })
        .then((data) => {
          dispatch(addToCart(data.data.data));
          navigate("/cart");
        });
    }
  };
  var [bookDate,setBookDate]=useState("")
  const setBookedSlot = (e,type) => {
    console.log("eee",e)
    if(type=="date")
    {
      setBookDate(e)
      // console.log("bookDate",bookDate);
      setSlotTaken(cartData
        .filter((item) => item.date === e)
        .map((filteredItem) => filteredItem.startTime));
    }
    else{
      // console.log("bookDate",bookDate);
      setSlotTaken(cartData
        .filter((item) => item.date === bookDate && item.employeeId===e)
        .map((filteredItem) => filteredItem.startTime));
    }
  }
  return (
    <>
      <div className="schedule">
        {dates.map((e) => {
          return (
            <div className="choose__dates ">
              <button
                className="radio__date"
                id={e.getDate()}
                onClick={() => {
                  selectDates(e.getDate());
                  setDate(e.getDate());
                  setValue("date", e.toLocaleDateString('en-GB'));
                  setBookedSlot(e.toLocaleDateString('en-GB'),"date")
                  timming(openTime, closeTime, e.toLocaleDateString('en-GB'));
                }}
                name="date"
                value={e.getDate()}
                {...register("date")}
              >
                <div>
                </div>
                <div>{weekDay[e.getDay().toString()]},</div>
                <div>{monthName[e.getMonth()]}</div>
                <div>{e.getDate()}</div>
              </button>
            </div>
          );
        })}
        {error}
        <div className="choose__employee">
          {employees.length == 0 ? (
            <h1
              style={{
                alignItems: "center",
                marginLeft: "120%",
                width: "580px",
              }}
            >
              No Employee Available in Store
            </h1>
          ) : (
            employees?.map((emp) => {
              return (
                <button
                  key={emp._id}
                  onClick={() => {
                    selectEmp(emp._id);
                    setEmployee(emp._id);
                    // setSlotOfEmployee(emp._id)
                    setBookedSlot(emp._id,"emp")
                    setValue("employee", emp._id);
                  }}
                  name="employee"
                  className="radio__emp"
                  id={emp._id}
                  value={emp._id}
                  {...register("employee")}
                >
                  {emp.employeeName}
                </button>
              );
            })
          )}
        </div>
        <div className="choose__time">
          {/* {console.log(employeeSlot)} */}
          {slot?.map((e) => {
            if (isAvailable != null) {
              var time = {
                starttime: isAvailable[0]?.startTime,
                endtime: isAvailable[0]?.endTime,
              };
            } else {
              time = "";
            }
            // console.log("eeeeee", e)
            const slot1 = new Date(e).toLocaleTimeString();
            // console.log("slo1t", slot1)
            // { console.log(isInRange(e, time)) }
            // console.log(e)
            return (
              (time != "" && isInRange(e, time)) ||(employeeSlot.includes(e) || slotTaken.includes(e)  )?
                (<button
                  type="radio"
                  name="init"
                  id={e}
                  value={slot1}
                  className="radio__btn disable__btn"
                  {...register("init")}
                  onClick={() => {
                    // setValue("init", slot1);
                  }}
                  disabled
                >
                  {slot1}
                </button>)
                : (<button
                  type="radio"
                  name="init"
                  id={e}
                  value={slot1}
                  className="radio__btn"
                  {...register("init")}
                  onClick={() => {
                    setValue("init", e);
                    setUserSelectSlot(slot1)
                    handleButtonClick(e);
                  }}
                >
                  {slot1}
                </button>)
            )
          }
          )}
        </div>
      </div>
      <form onSubmit={handleSubmit(submit)}>
        <input type="submit" value="submit" />
      </form>
    </>
  );
};

export default Demo2;
