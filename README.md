<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>Chu's Personal Library</title>

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

<link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;600;700&family=Pacifico&display=swap" rel="stylesheet">

<style>

*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}

body{

    background:linear-gradient(180deg,#FFE8F4,#FFF6FB);

    font-family:'Quicksand',sans-serif;

    overflow-x:hidden;

}

/* Header */

header{

    text-align:center;

    padding:70px 20px;

}

header h1{

    font-family:'Pacifico',cursive;

    font-size:60px;

    color:#ff4fa0;

    text-shadow:
    3px 3px 8px rgba(255,170,210,.5);

}

header p{

    margin-top:18px;

    color:#666;

    font-size:20px;

}

/* Showcase */

.showcase{

    margin-top:50px;

    overflow:hidden;

    width:100%;

    padding:25px 0;

}

.slider{

    display:flex;

    width:max-content;

    animation:scroll 25s linear infinite;

}

.card{

    width:170px;

    height:250px;

    margin:0 18px;

    border-radius:18px;

    overflow:hidden;

    background:white;

    box-shadow:0 12px 25px rgba(255,170,220,.35);

    transition:.3s;

}

.card:hover{

    transform:translateY(-8px);

}

.card img{

    width:100%;

    height:100%;

    object-fit:cover;

}

@keyframes scroll{

    from{

        transform:translateX(0);

    }

    to{

        transform:translateX(-50%);

    }

}

footer{

    margin:80px 0;

    text-align:center;

    color:#999;

}

</style>

</head>

<body>

<header>

<h1>Chumi's Library</h1>

<p>My collection of novels and books I have been reading online.</p>

</header>

<div class="showcase">

<div class="slider">

<div class="card">
<img src="images/225380s.jpg" alt="Example">
</div>

<div class="card">
<img src="https://drive.google.com/drive/folders/1GOFB0J50Ub8chsJp1XeAJw6Kj2Y6NQW7">
</div>

<div class="card">
<img src="https://drive.google.com/drive/folders/1GOFB0J50Ub8chsJp1XeAJw6Kj2Y6NQW7">
</div>

<div class="card">
<img src="https://picsum.photos/300/450?random=4">
</div>

<div class="card">
<img src="https://picsum.photos/300/450?random=5">
</div>

<div class="card">
<img src="https://picsum.photos/300/450?random=6">
</div>

<!-- Duplicate for seamless animation -->

<div class="card">
<img src="https://picsum.photos/300/450?random=1">
</div>

<div class="card">
<img src="https://picsum.photos/300/450?random=2">
</div>

<div class="card">
<img src="https://picsum.photos/300/450?random=3">
</div>

<div class="card">
<img src="https://picsum.photos/300/450?random=4">
</div>

<div class="card">
<img src="https://picsum.photos/300/450?random=5">
</div>

<div class="card">
<img src="https://picsum.photos/300/450?random=6">
</div>

</div>

</div>

<footer>

Made with 💖 by Chumi

</footer>

</body>
</html>
