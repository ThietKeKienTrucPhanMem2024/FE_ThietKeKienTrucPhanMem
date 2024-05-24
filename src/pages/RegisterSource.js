import { useRef, useState } from 'react'

function RegisterSource() {
  const courses = [
    {
      STT: 1,
      MaHP: 'KTVTKPM',
      ListLớp: [
        {
          STT: 1,
          MãLHP: 'KTVTKPM01',
          TênLớpHọcPhần: 'Kiến trúc phần mềm A',
          LớpDựKiến: 'L01',
          SĩSốTốiĐa: 40,
          ĐãĐăngKý: 30,
          TrạngThái: 'Open',
        },
        {
          STT: 2,
          MãLHP: 'KTVTKPM02',
          TênLớpHọcPhần: 'Kiến trúc phần mềm B',
          LớpDựKiến: 'L02',
          SĩSốTốiĐa: 40,
          ĐãĐăngKý: 10,
          TrạngThái: 'Open',
        },
      ],
      TênMônHọc: 'Kiến trúc và thiết kế phần mềm',
      TínChỉ: 3,
      HọcPhầnTrước: 'Nhập môn công nghệ phần mềm',
    },
    {
      STT: 2,
      MaHP: 'QLDAPM',
      ListLớp: [
        {
          STT: 1,
          MãLHP: 'QLDAPM01',
          TênLớpHọcPhần: 'Quản lý dự án phần mềm A',
          LớpDựKiến: 'L01',
          SĩSốTốiĐa: 30,
          ĐãĐăngKý: 25,
          TrạngThái: 'Open',
        },
      ],
      TênMônHọc: 'Quản lý dự án phần mềm',
      TínChỉ: 4,
      HọcPhầnTrước: 'Nhập môn quản lý dự án',
    },
    {
      STT: 3,
      MaHP: 'LTHDT',
      ListLớp: [
        {
          STT: 1,
          MãLHP: 'LTHDT01',
          TênLớpHọcPhần: 'Lập trình hướng đối tượng A',
          LớpDựKiến: 'L01',
          SĩSốTốiĐa: 25,
          ĐãĐăngKý: 20,
          TrạngThái: 'Closed',
        },
      ],
      TênMônHọc: 'Lập trình hướng đối tượng',
      TínChỉ: 3,
      HọcPhầnTrước: 'Lập trình cơ bản',
    },
    {
      STT: 4,
      MaHP: 'LTWWWJ',
      ListLớp: [
        {
          STT: 1,
          MãLHP: 'LTWWWJ01',
          TênLớpHọcPhần: 'Lập trình WWW với Java A',
          LớpDựKiến: 'L01',
          SĩSốTốiĐa: 20,
          ĐãĐăngKý: 15,
          TrạngThái: 'Open',
        },
      ],
      TênMônHọc: 'Lập Trình WWW với công nghệ Java',
      TínChỉ: 3,
      HọcPhầnTrước: 'Lập trình Java cơ bản',
    },
    {
      STT: 5,
      MaHP: 'NMDLL',
      ListLớp: [
        {
          STT: 1,
          MãLHP: 'NMDLL01',
          TênLớpHọcPhần: 'Nhập môn dữ liệu lớn A',
          LớpDựKiến: 'L01',
          SĩSốTốiĐa: 50,
          ĐãĐăngKý: 40,
          TrạngThái: 'Closed',
        },
      ],
      TênMônHọc: 'Nhập môn dữ liệu lớn',
      TínChỉ: 4,
      HọcPhầnTrước: 'Nhập môn cơ sở dữ liệu',
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
  const [listLopHocPhan, setlistLopHocPhan] = useState([])

  const handleRowClick = (course) => {
    setSelectedCourse(selectedCourse === course ? null : course)
  }

  const handleCloseDialog = () => {
    setSelectedCourse(null)
  }

  const handleRegister = () => {
    alert(`Đăng kí thành công ${selectedCourse.ListLớp[0].TênLớpHọcPhần}`)
    setlistLopHocPhan(selectedCourse.ListLớp)
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
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          backgroundColor: '#e0f7fa',
          padding: 20,
          borderRadius: 8,
          width: '80%',
          margin: '20px 0',
        }}
      >
        <div
          style={{
            backgroundColor: '#29b6f6',
            padding: '20px 40px',
            borderRadius: 8,
            color: 'white',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
          }}
        >
          <span style={{ marginTop: 10 }}>Nguyễn Đức Chiến</span>
          <span>Giới tính: Nam</span>
          <span>MSSV: 20066981</span>
          <span>Trạng thái: Đang học</span>
          <button
            style={{
              backgroundColor: '#ff7043',
              color: 'white',
              border: 'none',
              borderRadius: 4,
              padding: '8px 16px',
              marginTop: 20,
              cursor: 'pointer',
            }}
          >
            Đăng xuất
          </button>
        </div>
        <img
          src="https://zpsocial-f57-org.zadn.vn/eb953a960233e36dba22.jpg"
          alt="User"
          style={{
            marginLeft: 30,

            width: 100,
            height: 100,
            borderRadius: '5%',
          }}
        />
        <div style={{ marginLeft: 10, textAlign: 'left' }}>
          <p
            style={{
              fontSize: '16px',
              color: '#07c6b6',
              textDecoration: 'underline',
            }}
          >
            THÔNG TIN SINH VIÊN
          </p>
          <p
            style={{
              fontSize: '16px',
              color: '#07c6b6',
              textDecoration: 'underline',
            }}
          >
            ĐĂNG KÝ HỌC PHẦN
          </p>
          <p
            style={{
              fontSize: '16px',
              color: '#07c6b6',
              textDecoration: 'underline',
            }}
          >
            CHƯƠNG TRÌNH KHUNG
          </p>
        </div>
      </div>

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
              STT
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
              Trạng thái
            </th>
            <th
              style={{
                padding: 10,
                backgroundColor: '#20b56f',
                color: 'white',
                border: '1px solid #ddd',
              }}
            >
              Học phần trước
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
                {course.STT}
              </td>
              <td style={{ padding: 10, border: '1px solid #ddd' }}>
                {course.MaHP}
              </td>
              <td style={{ padding: 10, border: '1px solid #ddd' }}>
                {course.TênMônHọc}
              </td>
              <td style={{ padding: 10, border: '1px solid #ddd' }}>
                {course.TínChỉ}
              </td>
              <td style={{ padding: 10, border: '1px solid #ddd' }}>
                Bắt buộc
              </td>
              <td style={{ padding: 10, border: '1px solid #ddd' }}>
                {course.HọcPhầnTrước}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <span
        style={{
          marginTop: 20,
          marginBottom: 20,
          color: '#e28956',
          fontSize: 17,
          fontWeight: 'bold',
        }}
      >
        Lớp học phần chờ đăng ký
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
                padding: 10,
                backgroundColor: '#20b56f',
                color: 'white',
                border: '1px solid #ddd',
              }}
            >
              STT
            </th>
            <th
              style={{
                padding: 10,
                backgroundColor: '#20b56f',
                color: 'white',
                border: '1px solid #ddd',
              }}
            >
              Mã Lớp học
            </th>
            <th
              style={{
                padding: 10,
                backgroundColor: '#20b56f',
                color: 'white',
                border: '1px solid #ddd',
              }}
            >
              Tên Lớp học phần
            </th>
            <th
              style={{
                padding: 10,
                backgroundColor: '#20b56f',
                color: 'white',
                border: '1px solid #ddd',
              }}
            >
              Lớp dự kiến
            </th>
            <th
              style={{
                padding: 10,
                backgroundColor: '#20b56f',
                color: 'white',
                border: '1px solid #ddd',
              }}
            >
              Sĩ số tối đa
            </th>
            <th
              style={{
                padding: 10,
                backgroundColor: '#20b56f',
                color: 'white',
                border: '1px solid #ddd',
              }}
            >
              Đã đăng ký
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
          {listLopHocPhan.map((course) => (
            <tr
              key={course.STT}
              onClick={() => handleRowClick(course)}
              style={{ cursor: 'pointer' }}
            >
              <td style={{ padding: 10, border: '1px solid #ddd' }}>
                {course.STT}
              </td>
              <td style={{ padding: 10, border: '1px solid #ddd' }}>
                {course.MãLHP}
              </td>
              <td style={{ padding: 10, border: '1px solid #ddd' }}>
                {course.TênLớpHọcPhần}
              </td>
              <td style={{ padding: 10, border: '1px solid #ddd' }}>
                {course.LớpDựKiến}
              </td>
              <td style={{ padding: 10, border: '1px solid #ddd' }}>
                {course.SĩSốTốiĐa}
              </td>
              <td style={{ padding: 10, border: '1px solid #ddd' }}>
                {course.ĐãĐăngKý}
              </td>
              <td style={{ padding: 10, border: '1px solid #ddd' }}>
                {course.TrạngThái}
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
