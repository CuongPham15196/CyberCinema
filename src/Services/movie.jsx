import Axios from "axios";

export default class MovieService {
  listMovieApi() {
    return Axios({
      url: "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP10",
      method: "GET",
    });
  }

  listMovieForPageApi(page) {
    return Axios({
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhimPhanTrang?maNhom=GP10&soTrang=${page}&soPhanTuTrenTrang=8`,
      method: "GET",
    });
  }

  showTimesMovieApi(id) {
    return Axios({
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${id}`,
      method: "GET",
    });
  }

  detailMovieApi(id) {
    return Axios({
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=${id}`,
      method: "GET",
    });
  }
}
