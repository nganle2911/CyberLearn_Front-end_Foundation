// * Global variable 

let studentList = []; 

// TODO: DISPLAY STUDENT LIST
// * Step 1 - Get studentList from Backend  

const fetchStudents = () => {
    axios({
        url: "http://svcy.myclass.vn/api/SinhVien/LayDanhSachSinhVien",
        method: "GET",
    }).then((res) => {
        studentList = res.data;
        console.log(studentList); 
        renderStudents();
    }).catch((err) => {
        console.log(err);
    });
}

// * Step 2 - Display studentList on screen 
// Create HTML by JS code

const renderStudents  = () => {
    // * Interface of each student 
    // Browse studentList, having 10 students -> having 10 <tr> respectively 

    let htmlContent = ""; 
    for(let student of studentList) {
        htmlContent += `
            <tr>
                <td>${student.MaSV}</td>
                <td>${student.HoTen}</td>
                <td>${student.Email}</td>
                <td>${student.SoDT}</td>
                <td>${student.DiemToan}</td>
                <td>${student.DiemLy}</td>
                <td>${student.DiemHoa}</td>
                <td>
                    <button class="btn btn-danger" onclick="deleteStudent('${student.MaSV}')">Delete</button>
                    <button class="btn btn-info" onclick="getStudent('${student.MaSV}')">Update</button>
                </td>
            </tr>
        `;
    }
    document.getElementById('tableList').innerHTML = htmlContent; 
}


// TODO: ADD STUDENT 
// * Step 1 - Function addStudent - DOM to input, get the student information that the user entered into the form

const addStudent = () => {
    const studentCode = document.getElementById('code').value;
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const idCard = document.getElementById('idCard').value;
    const math = document.getElementById('math').value;
    const physics = document.getElementById('physics').value;
    const chemistry = document.getElementById('chemistry').value; 

    const newStudent = new Student(studentCode, name, email, phone, idCard, math, physics, chemistry); 

    axios({
        url: "http://svcy.myclass.vn/api/SinhVien/ThemSinhVien",
        method: "POST",
        data: newStudent
    }).then((res) => {
        // Close the form
        document.getElementById('btnClose').click();

        // Clear form 
        document.getElementById('btnReset').click();
        
        fetchStudents();
    }).catch((err) => {
        console.log(err);
    });
        
};


// TODO: DELETE STUDENT 
const deleteStudent = (id) => {
    axios({
        url: `http://svcy.myclass.vn/api/SinhVien/XoaSinhVien/${id}`,
        method: "DELETE"
    })
        .then((res) => {
            console.log(res);
            fetchStudents();
        })
        .catch((err) => {
            console.log(err);
        });
}; 


// TODO: UPDATE STUDENT
// * Get student info needed to be updated and show it on student form 

const getStudent = (id) => {
    axios({
        url: `http://svcy.myclass.vn/api/SinhVien/LayThongTinSinhVien/${id}`,
        method: "GET"
    }).then((res) => {
        console.log(res);
        document.getElementById('btnAdd').click();

        document.getElementById('code').value = res.data.MaSV;
        document.getElementById('name').value = res.data.HoTen;
        document.getElementById('email').value = res.data.Email;
        document.getElementById('phone').value = res.data.SoDT;
        document.getElementById('idCard').value = res.data.CMND;
        document.getElementById('math').value = res.data.DiemToan;
        document.getElementById('physics').value = res.data.DiemLy;
        document.getElementById('chemistry').value = res.data.DiemHoa;

        // * Student code must not be modified
        document.getElementById('code').setAttribute('disabled', true); 

    }).catch((err) => {
        console.log(err);
    });
}; 

// * Update student info

const updateStudent = (id) => {
    const studentCode = document.getElementById('code').value;
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const idCard = document.getElementById('idCard').value;
    const math = document.getElementById('math').value;
    const physics = document.getElementById('physics').value;
    const chemistry = document.getElementById('chemistry').value; 

    const updatedStudent = new Student(studentCode, name, email, phone, idCard, math, physics, chemistry); 

    axios({
        url: "http://svcy.myclass.vn/api/SinhVien/CapNhatThongTinSinhVien",
        method: "PUT",
        data: updatedStudent
    }).then((res) => {
        // Step 1 - Clear form 
        document.getElementById('btnReset').click(); 
        
        // Step 2 - Hide popup
        document.getElementById('btnClose').click();

        // Step 3 - Unlock studentCode input 
        document.getElementById('code').removeAttribute('disabled');
        
        // Step 4 - Fetch new student list 
        fetchStudents();
    }).catch((err) => {
        console.log(err);
    });
};


fetchStudents();

