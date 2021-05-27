
<?php  
	$conn = mysqli_connect("localhost", "root", "", "ghinaj");


function query($query) {
	global $conn;
	$result = mysqli_query($conn, $query);
	$rows = [];
	while ( $row = mysqli_fetch_assoc($result)) {
		$rows[] = $row;
	}
	return $rows;
};

function tambah($data){
	global $conn;
	$judul = htmlspecialchars($data["judul"]);
	$link = htmlspecialchars($data["link"]);

	$query = "INSERT INTO video 
				VALUES
			('','$judul','$link')
				";
	mysqli_query($conn,$query);
	return mysqli_affected_rows($conn);

}

function hapus($id) {
	global $conn;
	mysqli_query($conn, "DELETE FROM berita where id_berita = $id");
	return mysqli_affected_rows($conn);
}

function hapusproduct($id) {
	global $conn;
	mysqli_query($conn, "DELETE FROM produk where id = $id");
	return mysqli_affected_rows($conn);
}

function hapusvid($id) {
	global $conn;
	mysqli_query($conn, "DELETE FROM video where id = $id");
	return mysqli_affected_rows($conn);
}

function hapusorder($id) {
	global $conn;
	mysqli_query($conn, "DELETE FROM pesanan where id = $id");
	return mysqli_affected_rows($conn);
}

function ubahvid($data) {
	global $conn;
	$id = $data["id"];
	$judul = htmlspecialchars($data["judul"]);
	$link = htmlspecialchars($data["link"]);

	$query = "UPDATE video SET
			judul = '$judul',
			link = '$link' 
			WHERE id = $id
				";
	mysqli_query($conn,$query);
	return mysqli_affected_rows($conn);
}


function ubahberita($data) {
	global $conn;
	$id = $data['id'];
	$kategori = $data['kategori'];
	$judul = htmlspecialchars($data["judul"]);
	$headline = htmlspecialchars($data["headline"]);
	$isi = htmlspecialchars($data["isi"]);
	$pengirim = htmlspecialchars($data["pengirim"]);
	
	$query = "UPDATE berita SET
			judul = '$judul',
			id_kategori = '$kategori',
			headline = '$headline', 
			isi = '$isi', 
			pengirim = '$pengirim',
			tanggal = now()
			WHERE id_berita = $id
				";
	mysqli_query($conn,$query);
	return mysqli_affected_rows($conn);
}

function ubahproduk($data) {
	global $conn;
	$id = $data['id'];
	$kategori = $data['kategori'];
	$nama = htmlspecialchars($data["nama"]);
	$gambar = htmlspecialchars($data["gambar"]);
	$jumlah = htmlspecialchars($data["jumlah"]);
	
	$query = "UPDATE produk SET
			id_kategori = '$kategori',
			nama = '$nama', 
			gambar = '$gambar', 
			jumlah = '$jumlah'
			WHERE id = $id
				";
	mysqli_query($conn,$query);
	return mysqli_affected_rows($conn);
}

function ubahorder($data) {
	global $conn;
	$id = $data['id'];
	$nama = htmlspecialchars($data["nama"]);
	$alamat = htmlspecialchars($data["alamat"]);
	$produk = htmlspecialchars($data["produk"]);
	$jumlah = htmlspecialchars($data["jumlah"]);
	
	$query = "UPDATE pesanan SET
			nama = '$nama',
			alamat = '$alamat',
			produk = '$produk', 
			jumlah = '$jumlah', 
			tanggal = now()
			WHERE id = $id
				";
	mysqli_query($conn,$query);
	return mysqli_affected_rows($conn);
}

function cari($keyword) {
	$query = "SELECT * FROM video WHERE judul LIKE '%$keyword%'";
	return query($query);
}

function registrasi($data) {
	global $conn;
	$username = strtolower(stripslashes($data["username"]));
	$password = mysqli_real_escape_string($conn, $data["password"]);
	$password2 = mysqli_real_escape_string($conn, $data["password2"]);

	$same = mysqli_query($conn, "SELECT username FROM users WHERE username = '$username'");

	if (mysqli_fetch_assoc($same)) {
		echo "<script>
	    alert('Username sudah terdaftar!');
	    document.location.href = 'login.php';
	    </script>";
	    return false;
	}

	if ($password!=$password2) {
		 echo "<script>
	    alert('Konfirmasi Password Tidak Sesuai');
	    document.location.href = 'login.php';
	    </script>";
	    return false;
	}

	$password = password_hash($password, PASSWORD_DEFAULT);

	mysqli_query($conn, "INSERT INTO users VALUES('', '$username', '$password')");

	return mysqli_affected_rows($conn);
}


?>