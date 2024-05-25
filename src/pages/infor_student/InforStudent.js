import axios from 'axios'
import { useEffect, useRef, useState } from 'react'

const InforStudent = (props) => {
  const [student, setStudent] = useState({})

  useEffect(() => {}, [])
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
          flexDirection: 'row',
          height: 200,
          width: '80%',
          backgroundColor: '#b9f0f7',
          borderRadius: 5,
          marginTop: 20,
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            height: 200,
            width: '30%',
            borderRadius: 5,
            paddingLeft: 10,
          }}
        >
          <h3>Thông tin sinh viên</h3>
          <img
            src="https://zpsocial-f57-org.zadn.vn/eb953a960233e36dba22.jpg"
            alt="User"
            style={{
              marginLeft: 30,
              width: 120,
              height: 120,
              borderRadius: '5%',
            }}
          />
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            height: 200,
            width: '30%',
            borderRadius: 5,
            paddingLeft: 10,
            justifyContent: 'space-evenly',
            alignItems: 'flex-start',
          }}
        >
          <sp>MSSV: 20066981</sp>
          <sp>Họ tên: Nguyễn Đức Chiến</sp>
          <sp>Giới tính: Nam</sp>
          <sp>Ngày sinh: 30/11/2002</sp>
          <sp>Nơi sinh: Tỉnh Thanh Hóa</sp>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            height: 200,
            width: '30%',
            borderRadius: 5,
            paddingLeft: 10,
            justifyContent: 'space-evenly',
            alignItems: 'flex-start',
          }}
        >
          <sp>MSSV: 20066981</sp>
          <sp>Họ tên: Nguyễn Đức Chiến</sp>
          <sp>Giới tính: Nam</sp>
          <sp>Ngày sinh: 30/11/2002</sp>
          <sp>Nơi sinh: Tỉnh Thanh Hóa</sp>
        </div>
      </div>
    </div>
  )
}

export default InforStudent
