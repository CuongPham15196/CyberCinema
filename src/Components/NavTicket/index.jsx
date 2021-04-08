import { Button, FormControl, NativeSelect } from "@material-ui/core";
import { useStyles } from "Components/NavTicket/style";
import { useFormik } from "formik";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./style.css";
import { showTimesMovieApi } from "Reducer/showTimesMoive";

function NavTicket(props) {
  const listMovie = useSelector((state) => state.listMovie.data);
  const classes = useStyles();
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      movie: "",
      cinema: "",
      date: "",
      screening: "",
    },
  });

  useEffect(() => {
    if (formik.values.movie) dispatch(showTimesMovieApi(formik.values.movie));
  }, [formik.values.movie]);

  const showTimesMovie = useSelector((state) => state.showTimesMovie.data);

  const renderMovie = () => {
    return listMovie?.map((movie) => {
      return (
        <option key={movie.maPhim} value={movie.maPhim}>
          {movie.tenPhim}
        </option>
      );
    });
  };

  const renderCinema = () => {
    return showTimesMovie?.heThongRapChieu.map((item) => {
      return item.cumRapChieu.map((cinema) => {
        return (
          <option key={cinema.maCumRap} value={cinema.maCumRap}>
            {cinema.tenCumRap}
          </option>
        );
      });
    });
  };

  const renderDate = () => {
    let dataDate = "";
    return showTimesMovie?.heThongRapChieu.map((item) => {
      return item.cumRapChieu.map((cinema) => {
        if (formik.values.cinema === cinema.maCumRap) {
          return cinema.lichChieuPhim.map((date) => {
            if (dataDate !== new Date(date.ngayChieuGioChieu).toLocaleDateString()) {
              dataDate = new Date(date.ngayChieuGioChieu).toLocaleDateString();
              return (
                <option key={date.maLichChieu} value={dataDate}>
                  {dataDate}
                </option>
              );
            }
          });
        }
      });
    });
  };

  const renderTime = () => {
    return showTimesMovie?.heThongRapChieu.map((item) => {
      return item.cumRapChieu.map((cinema) => {
        if (formik.values.cinema === cinema.maCumRap) {
          return cinema.lichChieuPhim.map((time) => {
            if (formik.values.date === new Date(time.ngayChieuGioChieu).toLocaleDateString())
              return (
                <option
                  key={time.maLichChieu}
                  value={new Date(time.ngayChieuGioChieu).toLocaleTimeString()}
                >
                  {new Date(time.ngayChieuGioChieu).toLocaleTimeString()}
                </option>
              );
          });
        }
      });
    });
  };

  return (
    <section className="ticker mb-5 d-none d-lg-block">
      <div className="ticker__content">
        <form onSubmit={formik.onSubmit}>
          <FormControl className={classes.formControl}>
            <NativeSelect
              value={formik.values.movie}
              onChange={formik.handleChange}
              name="movie"
              className={classes.selectEmpty}
              inputProps={{ "aria-label": "movie" }}
            >
              <option value="">Phim</option>
              {renderMovie()}
            </NativeSelect>
          </FormControl>
          <FormControl className={classes.formControl}>
            <NativeSelect
              value={formik.values.cinema}
              onChange={formik.handleChange}
              name="cinema"
              className={classes.selectEmpty}
              inputProps={{ "aria-label": "cinema" }}
            >
              <option value="">Rạp</option>
              {formik.values.movie !== "" ? (
                renderCinema()
              ) : (
                <option value="">Vui Lòng Chọn Phim</option>
              )}
            </NativeSelect>
          </FormControl>
          <FormControl className={classes.formControl}>
            <NativeSelect
              value={formik.values.date}
              onChange={formik.handleChange}
              name="date"
              className={classes.selectEmpty}
              inputProps={{ "aria-label": "date" }}
            >
              <option value="">Ngày xem</option>
              {formik.values.movie !== "" && formik.values.cinema !== "" ? (
                renderDate()
              ) : (
                <option value="">Vui Lòng Chọn Phim Và Rạp Chiếu</option>
              )}
            </NativeSelect>
          </FormControl>
          <FormControl className={classes.formControl}>
            <NativeSelect
              value={formik.values.screening}
              onChange={formik.handleChange}
              name="screening"
              className={classes.selectEmpty}
              inputProps={{ "aria-label": "screening" }}
            >
              <option value="">Suất chiếu</option>
              {formik.values.movie !== "" &&
              formik.values.cinema !== "" &&
              formik.values.date !== "" ? (
                renderTime()
              ) : (
                <option value="">Vui Lòng Chọn Phim, Rạp Chiếu Và Ngày Chiếu</option>
              )}
            </NativeSelect>
          </FormControl>
          <Button className={classes.btn} type="submit" variant="contained" color="primary">
            Đặt vé
          </Button>
        </form>
      </div>
    </section>
  );
}

export default NavTicket;
