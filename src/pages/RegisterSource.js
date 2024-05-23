import { useRef, useState } from 'react'

function RegisterSource() {
  const courses = [
    {
      id: 1,
      name: 'Kiến trúc và thiết kế phần mềm',
      code: 'KTVTKPM',
      credits: 3,
      enrolled: 30,
      status: 'Open',
    },
    {
      id: 2,
      name: 'Quản lý dự án phần mềm',
      code: 'QLDAPM',
      credits: 4,
      enrolled: 25,
      status: 'Open',
    },
    {
      id: 3,
      name: 'Lập trình hướng đối tượng',
      code: 'LTHDT',
      credits: 3,
      enrolled: 20,
      status: 'Closed',
    },
    {
      id: 4,
      name: 'Lập Trình WWW với công nghệ Java',
      code: 'LTWWWJ',
      credits: 3,
      enrolled: 15,
      status: 'Open',
    },
    {
      id: 5,
      name: 'Nhập môn dữ liệu lớn',
      code: 'NMDLL',
      credits: 4,
      enrolled: 40,
      status: 'Closed',
    },
  ]

  const registerCourses = [
    {
      id: 3,
      name: 'Lập trình hướng đối tượng',
      code: 'LTHDT',
      credits: 3,
      enrolled: 20,
      status: 'Closed',
    },

    {
      id: 5,
      name: 'Nhập môn dữ liệu lớn',
      code: 'NMDLL',
      credits: 4,
      enrolled: 40,
      status: 'Closed',
    },
  ]

  const [selectedCourse, setSelectedCourse] = useState(null)

  const handleRowClick = (course) => {
    setSelectedCourse(course)
  }

  const handleCloseDialog = () => {
    setSelectedCourse(null)
  }

  const handleRegister = () => {
    alert(`Đăng kí thành công ${selectedCourse.name}`)
    setSelectedCourse(null)
  }
  return (
    <div
      style={{
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <span
        style={{
          color: 'black',
          fontSize: 20,
          fontWeight: 'bold',
          marginBottom: 20,
          marginTop: 50,
        }}
      >
        Đăng kí học phần
      </span>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            height: 15,
            borderRadius: 6,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            margin: 20,
            padding: 15,
            backgroundColor: '#50bfb6',
            color: 'white',
            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
          }}
        >
          <span>Học kì hiện tại: HK3 (2024-2025)</span>
        </div>
        <div
          style={{
            height: 15,
            borderRadius: 6,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            margin: 20,
            padding: 15,
            backgroundColor: '#50bfb6',
            color: 'white',
            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
          }}
        >
          <span>Ds Cựu sinh viên</span>
        </div>
        <div
          style={{
            height: 15,
            borderRadius: 6,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            margin: 20,
            padding: 15,
            backgroundColor: '#50bfb6',
            color: 'white',
            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
          }}
        >
          <span>Tra cứu công nợ</span>
        </div>
      </div>

      <table
        border="1"
        style={{
          width: '80%',
          textAlign: 'center',
          borderCollapse: 'collapse',
        }}
      >
        <thead>
          <tr>
            <th
              style={{
                padding: 10,
                backgroundColor: '#20b56f',
                color: 'white',
                border: '1px solid #ddd',
              }}
            >
              ID
            </th>
            <th
              style={{
                padding: 10,
                backgroundColor: '#20b56f',
                color: 'white',
                border: '1px solid #ddd',
              }}
            >
              Tên môn học
            </th>
            <th
              style={{
                padding: 10,
                backgroundColor: '#20b56f',
                color: 'white',
                border: '1px solid #ddd',
              }}
            >
              Mã học phần
            </th>
            <th
              style={{
                padding: 10,
                backgroundColor: '#20b56f',
                color: 'white',
                border: '1px solid #ddd',
              }}
            >
              Tín chỉ
            </th>
            <th
              style={{
                padding: 10,
                backgroundColor: '#20b56f',
                color: 'white',
                border: '1px solid #ddd',
              }}
            >
              Số lượng đăng kí
            </th>
            <th
              style={{
                padding: 10,
                backgroundColor: '#20b56f',
                color: 'white',
                border: '1px solid #ddd',
              }}
            >
              Trạng thái
            </th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course) => (
            <tr
              key={course.id}
              onClick={() => handleRowClick(course)}
              style={{ cursor: 'pointer' }}
            >
              <td style={{ padding: 10, border: '1px solid #ddd' }}>
                {course.id}
              </td>
              <td style={{ padding: 10, border: '1px solid #ddd' }}>
                {course.name}
              </td>
              <td style={{ padding: 10, border: '1px solid #ddd' }}>
                {course.code}
              </td>
              <td style={{ padding: 10, border: '1px solid #ddd' }}>
                {course.credits}
              </td>
              <td style={{ padding: 10, border: '1px solid #ddd' }}>
                {course.enrolled}
              </td>
              <td style={{ padding: 10, border: '1px solid #ddd' }}>
                {course.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <span
        style={{
          marginTop: 120,
          marginBottom: 20,
          color: 'black',
          fontSize: 17,
          fontWeight: 'bold',
        }}
      >
        Môn học đã đăng kí
      </span>
      <table
        border="1"
        style={{
          width: '80%',
          textAlign: 'center',
          borderCollapse: 'collapse',
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
          marginBottom: 50,
        }}
      >
        <thead>
          <tr>
            <th
              style={{
                padding: '10px 20px',
                backgroundColor: '#33af92',
                color: 'white',
                boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
              }}
            >
              ID
            </th>
            <th
              style={{
                padding: '10px 20px',
                backgroundColor: '#33af92',
                color: 'white',
                boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
              }}
            >
              Tên môn học
            </th>
            <th
              style={{
                padding: '10px 20px',
                backgroundColor: '#33af92',
                color: 'white',
                boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
              }}
            >
              Mã học phần
            </th>
            <th
              style={{
                padding: '10px 20px',
                backgroundColor: '#33af92',
                color: 'white',
                boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
              }}
            >
              Tín chỉ
            </th>
            <th
              style={{
                padding: '10px 20px',
                backgroundColor: '#33af92',
                color: 'white',
                boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
              }}
            ></th>
          </tr>
        </thead>
        <tbody>
          {registerCourses.map((course) => (
            <tr key={course.id}>
              <td style={{ padding: 10, border: '1px solid #ddd' }}>
                {course.id}
              </td>
              <td style={{ padding: 10, border: '1px solid #ddd' }}>
                {course.name}
              </td>
              <td style={{ padding: 10, border: '1px solid #ddd' }}>
                {course.code}
              </td>
              <td style={{ padding: 10, border: '1px solid #ddd' }}>
                {course.credits}
              </td>
              <td
                style={{
                  padding: 10,
                  border: '1px solid #ddd',
                  cursor: 'pointer',
                  color: '#33af92',
                }}
                onClick={() => {}}
              >
                Hủy
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedCourse && (
        <div
          style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: '#e0fff9',
            padding: 20,
            borderRadius: 10,
            boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.5)',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <p>Bạn muốn đăng kí môn học: {selectedCourse.name}?</p>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-evenly',
              alignItems: 'center',
              flexDirection: 'row',
            }}
          >
            <button
              onClick={handleRegister}
              style={{
                backgroundColor: '#33af92',
                color: 'white',
                borderRadius: 5,
                padding: '5px 10px',
              }}
            >
              Đăng kí
            </button>
            <button
              onClick={handleCloseDialog}
              style={{
                backgroundColor: 'white',
                color: 'black',
                borderRadius: 5,
                padding: '5px 10px',
              }}
            >
              Hủy
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
export default RegisterSource
