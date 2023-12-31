import axios from "axios";

// export async function getContest(teacherId){
//     try{

//         const response = await axios.get(`http://localhost:9090/teacher/get-contest-list?teacherId=${teacherId}`);
//         return response;

//     }catch(error){
//         console.log(error)
//         return error;
//     }

// }

export async function getTecherList() {
  try {
    const response = await axios.get(
      "http://localhost:9090/admin/getTeacherList"
    );
    console.log("Api response => ", response);
    return response;
  } catch (error) {
    console.log("AxiosException =>", error);
    return error;
  }
}

export async function updateTeacherStatus(updateTeacher) {
  try {
    const response = await axios.post(
      "http://localhost:9090/admin/updateActiveStatusOfTeacher",
      updateTeacher
    );
    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
}

export async function registerNewTeacher(data) {
  try {
    const response = await axios.post(
      "http://localhost:9090/admin/teacher-register",
      data
    );
    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
}

export async function loginAdmin(data) {
  try {
    const response = await axios.post(
      "http://localhost:9090/admin/login",
      data
    );

    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
}
