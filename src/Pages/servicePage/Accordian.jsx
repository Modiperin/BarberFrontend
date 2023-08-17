import React from 'react'
import './Accordian.css'

const Accordian = () => {
    return 
    (
    <React.Fragment>            
    <div class="collapse-content">
      <div class="collapse" id="instagram">
        <a class="instagram" href="#instagram"
          ><i class="fab fa-instagram"></i> Instagram</a
        >
        <div class="content">
          <div class="inner-content">
            <h3>Instagram</h3>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
            nobis iusto deleniti corporis alias quo a quam similique cupiditate
            pariatur aliquid, omnis, officia dicta officiis impedit nisi dolores
            ut, distinctio placeat. Magni dolores perferendis ab laborum in
            neque, non exercitationem!
          </div>
        </div>
      </div>
      <div class="collapse" id="twitter">
        <a class="twitter" href="#twitter"
          ><i class="fab fa-twitter"></i> Twitter</a
        >
        <div class="content">
          <div class="inner-content">
            <h3>Twitter</h3>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
            nobis iusto deleniti corporis alias quo a quam similique cupiditate
            pariatur aliquid, omnis, officia dicta officiis impedit nisi dolores
            ut, distinctio placeat. Magni dolores perferendis ab laborum in
            neque, non exercitationem!
          </div>
        </div>
      </div>
      <div class="collapse" id="dribbble">
        <a class="dribbble" href="#dribbble"
          ><i class="fab fa-dribbble"></i> Dribble</a
        >
        <div class="content">
          <div class="inner-content">
            <h3>Dribbble</h3>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
            nobis iusto deleniti corporis alias quo a quam similique cupiditate
            pariatur aliquid, omnis, officia dicta officiis impedit nisi dolores
            ut, distinctio placeat. Magni dolores perferendis ab laborum in
            neque, non exercitationem!
          </div>
        </div>
      </div>
      <div class="collapse" id="youtube">
        <a class="youtube" href="#youtube"
          ><i class="fab fa-youtube"></i> Youtube</a
        >
        <div class="content">
          <div class="inner-content">
            <h3>Youtube</h3>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
            nobis iusto deleniti corporis alias quo a quam similique cupiditate
            pariatur aliquid, omnis, officia dicta officiis impedit nisi dolores
            ut, distinctio placeat. Magni dolores perferendis ab laborum in
            neque, non exercitationem!
          </div>
        </div>
      </div>
    </div>

</React.Fragment>
)
}
export default Accordian;