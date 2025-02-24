<template>
<div class="mesas">
    
    <div class="mesas__sillas">
    <div class="mesas__sillas-derecha">
    <v-img class="mesas__silla":width="100"  src="https://e7.pngegg.com/pngimages/884/490/png-clipart-table-chair-drawing-coloring-book-graphics-table-table-chair.png"></v-img> 
    <v-img class="mesas__silla":width="100"  src="https://e7.pngegg.com/pngimages/884/490/png-clipart-table-chair-drawing-coloring-book-graphics-table-table-chair.png"></v-img> 
    </div>
</div>
    <div class="mesas__element"></div>
    <div class="mesas__sillas">

    <div class="mesas__sillas-izquierda">

    <v-img class="mesas__silla":width="100"  src="https://e7.pngegg.com/pngimages/884/490/png-clipart-table-chair-drawing-coloring-book-graphics-table-table-chair.png"></v-img> 
    <v-img class="mesas__silla":width="100"  src="https://e7.pngegg.com/pngimages/884/490/png-clipart-table-chair-drawing-coloring-book-graphics-table-table-chair.png"></v-img> 
    </div>
</div>

    <div class="mesas__sillas">
    <div class="mesas__sillas-derecha">
    <v-img class="mesas__silla":width="100"  src="https://e7.pngegg.com/pngimages/884/490/png-clipart-table-chair-drawing-coloring-book-graphics-table-table-chair.png"></v-img> 
    <v-img class="mesas__silla":width="100"  src="https://e7.pngegg.com/pngimages/884/490/png-clipart-table-chair-drawing-coloring-book-graphics-table-table-chair.png"></v-img> 
    </div>
</div>
    <div class="mesas__element"></div>
    <div class="mesas__sillas">

    <div class="mesas__sillas-izquierda">

    <v-img class="mesas__silla":width="100"  src="https://e7.pngegg.com/pngimages/884/490/png-clipart-table-chair-drawing-coloring-book-graphics-table-table-chair.png"></v-img> 
    <v-img class="mesas__silla":width="100"  src="https://e7.pngegg.com/pngimages/884/490/png-clipart-table-chair-drawing-coloring-book-graphics-table-table-chair.png"></v-img> 
    </div>
</div>
</div>
 
 </template>  
 
  <script lang="ts">

  </script>
  
  <style lang="scss" scoped>
  .mesas{
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: center;


    &__silla{
        padding: 15px;

    }
    &__sillas-derecha{
        padding: 15px;

   
    }     
    &__sillas-izquierda{
        padding: 15px;

       } 

  
    

  
  &__element {
    width: 150px;
    height: 300px;
    background-color: #6e4b3a;
    border-radius: 10px;
    display: flex;
    align-items: center;

    &__silla-img{
        width: 125px;
        height: 125px;
    }
  }
}
  
  @media (max-width: 600px) {
    .mesas__element {
      height: 200px;
      width: 120px;
    }
  }

  </style>
  