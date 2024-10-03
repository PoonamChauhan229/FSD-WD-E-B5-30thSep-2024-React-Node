import ProfileCard from './ProfileCard'

function ProfilePropsDisplay(){
  return (
    <div className='App'>
        
        <ProfileCard profilepic={"https://www.pngplay.com/wp-content/uploads/12/User-Avatar-Profile-PNG-Photos.png"} name={"Harish"}/>

      <ProfileCard profilepic={"https://png.pngtree.com/png-clipart/20231020/original/pngtree-avatar-of-a-brunette-man-png-image_13379740.png"} name={"Ashraf"}/>

      <ProfileCard profilepic={"https://png.pngtree.com/png-clipart/20231020/original/pngtree-avatar-of-a-brunette-man-png-image_13379739.png"} name={"Neeraj"}/>

      <ProfileCard profilepic={"https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-avatar-image-for-profile-png-image_13001877.png"} name={"Firoz"}/>
      </div>
  )
}

export default ProfilePropsDisplay