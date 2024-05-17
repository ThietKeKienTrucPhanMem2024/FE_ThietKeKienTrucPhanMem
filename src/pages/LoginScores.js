import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'

function LoginScores(props) {
  const width = useRef(window.innerWidth).current
  const height = useRef(window.innerHeight).current
  const navigate = useNavigate()

  return (
    <div
      style={{
        flex: 1,
        display: 'flex',
        height: height,
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
        }}
      >
        Đăng nhập Đăng kí học phần
      </span>
      <div
        style={{
          height: height * 0.142,
          width: width * 0.228,
          backgroundColor: '#a2b8ef',
          borderRadius: 6,
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <input
          type="text"
          placeholder={'Username or Email'}
          style={{
            marginTop: 10,
            backgroundColor: '#385b70',
            color: '#fff',
            border: '1px solid transparent',
            outline: 'none',
            padding: 8,
            width: width * 0.197,
            borderRadius: 5,
            textAlign: 'left',
            justifyContent: 'center',
            paddingLeft: 10,
          }}
        />

        <input
          type="password"
          placeholder={'Password'}
          color={'#fff'}
          style={{
            marginBottom: 10,
            backgroundColor: '#385b70',
            color: '#ffffff',
            border: '1px solid transparent',
            outline: 'none',
            padding: 8,
            width: width * 0.197,
            borderRadius: 5,
            textAlign: 'left',
            justifyContent: 'center',
            paddingLeft: 10,
          }}
        />
        <style jsx>{`
          input::placeholder {
            color: #ffffff;
          }
        `}</style>
      </div>
      <button
        style={{
          marginTop: 20,
          backgroundColor: '#385b70',
          color: '#ffffff',
          border: '1px solid transparent',
          outline: 'none',
          padding: 8,
          width: width * 0.197,
          borderRadius: 5,
          textAlign: 'center',
          justifyContent: 'center',
          paddingLeft: 10,
        }}
        onClick={() => {
          navigate('/RegisterSource')
        }}
      >
        Đăng nhập
      </button>
    </div>
  )
}

export default LoginScores
