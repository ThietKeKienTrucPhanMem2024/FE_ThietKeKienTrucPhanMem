import { useRef } from 'react'

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
            height: 20,
            borderRadius: 6,
            display: 'flex',
            justifyContent: 'space-around',
            margin: 20,
            padding: 10,
            backgroundColor: '#b5ebff',
          }}
        >
          <span>Học kì hiện tại: HK3 (2024-2025)</span>
        </div>
        <div
          style={{
            height: 20,
            borderRadius: 6,
            display: 'flex',
            justifyContent: 'space-around',
            margin: 20,
            padding: 10,
            backgroundColor: '#ceabab',
          }}
        >
          <span>Ds Cựu sinh viên</span>
        </div>
        <div
          style={{
            height: 20,
            borderRadius: 6,
            display: 'flex',
            justifyContent: 'space-around',
            margin: 20,
            padding: 10,
            backgroundColor: '#938330',
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
                backgroundColor: '#a2b8ef',
                color: 'white',
              }}
            >
              ID
            </th>
            <th>Tên môn học</th>
            <th>Mã học phần</th>
            <th>Tín chỉ</th>
            <th>Số lượng đăng kí</th>
            <th>Trạng thái</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course) => (
            <tr key={course.id}>
              <td>{course.id}</td>
              <td>{course.name}</td>
              <td>{course.code}</td>
              <td>{course.credits}</td>
              <td>{course.enrolled}</td>
              <td>{course.status}</td>
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
        }}
      >
        <thead>
          <tr>
            <th
              style={{
                paddingLeft: 10,
                paddingRight: 10,
                backgroundColor: '#e7e5ff',
                color: 'white',
              }}
            >
              ID
            </th>
            <th>Tên môn học</th>
            <th>Mã học phần</th>
            <th>Tín chỉ</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {registerCourses.map((course) => (
            <tr key={course.id}>
              <td>{course.id}</td>
              <td>{course.name}</td>
              <td>{course.code}</td>
              <td>{course.credits}</td>
              <td>Hủy</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
export default RegisterSource
