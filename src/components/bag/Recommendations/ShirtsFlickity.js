import React from "react";
import Flickity from "react-flickity-component";
import "./Flickity.css";
import { observer, inject } from 'mobx-react'

const ShirtsFlickity = inject('UserStore')(observer(props => {
  const likeList = props.UserStore.likedItems
  const userItems = props.UserStore.userItems
  const recItems = []
  
  for (const liked of likeList) {
    for (const item of userItems) {
      if ((liked.brand === item.brand || liked.color === item.color) && (item.type.includes('shirt') && liked.id !== item.id)){
        recItems.push(item)
      }
    }
  }
  return (
    <div className="shirtsFlickity">
      <h1>Recommended Shirts</h1>
      <Flickity>
        {recItems.splice(0,30).map(i =>
        <a target="_blank" rel="noopener noreferrer" href={i.url}>
          <img src={i.image} alt={i.id} class='recImg'/>
          </a>
        )}
      </Flickity>
    </div>
  );
}))

export default ShirtsFlickity