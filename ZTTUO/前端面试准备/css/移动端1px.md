## 目标

```css
border: 0.5px #FFF solid
```

## 伪元素配合transform: scale缩放实现

```css
.setOnePx{
    position: relative;
}

/* 一条border */
.setOnePx::after{
     position: absolute;
     content: '';
     background-color: #e5e5e5;
     display: block;
     width: 100%;
     height: 1px; /*no*/
     transform: scale(1, 0.5);
     top: 0;
     left: 0;
 }

/* 四条border */
.setOnePx::after{
     content:" ";
     position:absolute;
     top: 0;
     left: 0;
     width: 200%;
     height: 200%;
     transform: scale(0.5);
     transform-origin: left top;
     box-sizing: border-box;
     border: 1px solid #E5E5E5;
     border-radius: 4px;
 }

```
