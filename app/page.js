export default function Home() {
  let name = 'pvvng';
  let link = 'https://naver.com';
  return (
    <div>
      <h4 className="title" style={{ color : 'red', fontSize : '20px' }}>넥스트스터디</h4>
      <p className="title-sub">by dev {name}</p>
      <a href={link} className="link">링크</a>
    </div>
  )
}