import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../common/Button.jsx';
import Login from '../Auth/Auth.jsx';
import { Container, Left, Right, Mid } from './Navbar.style.js';
import SearchIcon from '../../assets/searchIcon.svg';
import { Link, useNavigate } from 'react-router-dom';
import { logoutAction } from '../../store/Action/Auth.js';
const Navbar = () => {
  const [login, setLogin] = useState(false);
  const state = useSelector(state => state.user);
  const dispatch = useDispatch();
  const navigation = useNavigate();
  const [location, setLocation] = useState(false);
  const [current, setCurrent] = useState(state);
  useEffect(() => {
    if (!current.token) {
      navigation('/');
    }
    console.log(state);
  }, [current]);

  const logoutHandler = () => {
    dispatch(logoutAction(() => navigation('/')));
  };

  return (
    <>
      {login && <Login close={() => setLogin(false)} />}
      <Container>
        <Left>
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAWoAAACLCAMAAAB/aSNCAAAAw1BMVEX/////ZgD+qib/XgD/WQD/YQD/XAD/WAD/7OD/uZ//1sT/p3///vz/aAD/oHX/zbX/dB7/8e3+pAD/9e//iFH/+vb+pxf/wqf/59v/3s7/rYn/7+f/sY//9/H/xq3+qB3/kmD/m2z/tpb/gED/eTL/4dP/z7r/5sb+tUr+yoX/2cj/hUn/lmX/xKr/nXH/7NT/9Ob+v2r+s0T+0JX+rzH+vF//bhX/fTj/kFj+3rb/16f+xHf/bh3/iE7+1J7/48H+vWJWZSnyAAASYElEQVR4nO1de3/aOg8mTexwp4NCuJcC5Wywsp1dKDvrzs73/1RvILEkX2IohMv6Rr/9s9Rx5Me2LMmSyOUyyugPp89//fjx+1Pz0my8efr84Vu9Xm+F/77/dWle3jZ9rbduYrqvvx9cmp23S+X39RtC963Pl+bozdL71o1E9zeZxD4NfVCQvrlp/X1pnt4mfaqrSN/c1D9dmqs3Se/vdajvv1yaq7dIvw2LOlzWPy7N1xukL4ZFnS3rU5BJUh8jrWej20lfUczz1ent8vF4Xv9w0tWPeFkfpoSsfeYw153TZ4HPwod+NxV+/2AyAx1Sq3xAb0vubIn38Nncj575QWpM/5GUJD9CCXKALyTvRag6bhUfTln8kKXH9p9I/yTIj3BVf319b0/xonacFTwb+OKZ9/8trn8a9Y+tsP7++t4KroDVhWew0h1eTJHxP49M9oug1/eWQW0hC9IZ1OlS4qmYQZ0yNTOoz0WDDOpzUbaqz0blDOqzUQb12ehbBvW56HuyYv3t9b1lUFsoyYd6mBc1g9pC6bqbMqgtlK4TNYPaQuVEWV0/IOzmmqG+fBTR3wlY378/oLOrhbpRfXFuuxdG2xybEC7qfw7o7FqhnvMNY67T2930lJRwLrYOWQJXCnUjZou9XIiBmL4asW59OKSvK4W6K9jyZhfiICKzx6l+UIz1lUJ9KzhgpQtxENM/BqwPUapzVwt1BaB+uBAHgvT7xfsDjPINXSnUv0R4hDu+EAeCPmvL+tAosiuFeihY8PMX4gDoLwXr+r8HdnSlUOcWUXzKNcSyfZWwbh0QARLRtUJdHvmuy/3+pb5P6TvR+O5vDonW29K1Qp3Ltcfd4XUkrpWp+Dg8v+t6ob4iQg9f/ffhvWRQ70PijuBAjTqiDOp9qBxDfaBGHVEG9V4ULevWoXreljKo96LIm3pcwmIG9V4U2YwH+U6BMqj3otg8P1in3lAG9V6UQX02+rRDgDSLhVK1FHTIXDSGY9kEew3Us0IgO3/K+dnTuB9oHqF382FhXBgW3+0cQm8W9Au1R9MQ8sG41lCetQtjylGv1q+W+sP2jo8027VgPC7U2tZF2ewMx91+MMubWkVQJ96Tj5nnMsZcz6kKMALOXe7SFLn9oW5XPJd7mAdWno0qXtif6qnodW+5Fz52OefTsc20fqyuooYeWwQqqks/ZJXLLtSP4TNvJZCtTcK3w/Fxb2EDu3bHtl8J+XQeOkmtZr+w1V2g3WjGGoh5NL0p5G45zF9up2oYpW75Q2y2N9Q9d+tC5qPov80u48KnTPMbGyMfetx06iU6jPILDzpwGPfupCTVO4Nn7yOPmm5n5fEFv8/8RK924GCzsKE3Mc5K8cWjrbg3qckNftSTHSBtRt4Nh1wJP1GGvnCP7A31Mm7oz6PXKKCY31hzpc9uupiaL70DX2nJ/CmCPRP5fD6+/Rg/217MjH3pZbLbKA0WnvyR8CuGtNeq72jNRlKLKKTMqFf31BEz3sl1xHc9HNPeUL+IZqVw6U64I5EXb8yxxnP4ZWby7ldVDLbjA8BGhluYsWB1ZXjdiPW7lQqDY3CBlxdcb+V40kb5N4LaED7WrOjf8PJF0SXH7bEv1GVx2xeuKWXHYLsnA9IbrFU5nMs9mEYX9rOM/47XuAhhCb6a6+sT5Re0j5QNKGxaKtLm2TW1cir0eIwMc5Nfb236xkstFaireR2maJu3DSt1+8qzyl83oaXjF/eAelUzva5nDt8ZkQ4/Ih2OCbPu+HSBRHm5Lb3kytA4Egb8HwX13YujElts20wThuYoigRKYr2nh32gXhlfVaNzzChsqEJ5SWrlUaij4D3d3dSUdADOGFe2yDFQOzqertNQhsZCRY9+U2I710yakvDF9R5Qi2+4oaJHnnFZCCPHGxC41JKoRWTaWKjrgWyUt2KUP6BHNZXIKHk3Xy73CrLUOgpqZMxjL9PpilWqA4Vp/lDrFLtkUph0aHUpf+7L1PGQif6+UHvrYqM8KE5JX76k9gYgGPi0MJ8HVBlxwRYZovjgi36hUJ3Ea8SXdM+osND9TwXpAfk6iwVYc0L5TAFq5j8H7Q3D5WZ8fMzFWyw2MspECnKCQpko/E4Q/qHc7rKYDbH8d0LtPcVPP+JoXUmHn0LTWHzNSEuQaFiPYxVD1Rg7G+NJVqyjBCQtLaOAQ8EDoEzl2/FQ84l2CH0EpsEer0LnnOgHuNzYQqyucj/c4Ix54nu7oOaoHZNFhHU2wjNanAcoLcixLVr28NRAGVeu9WuyCR7fwmhh1Xg60X07J/vnaKg93Tori6/SgEZcM9MdD3O9h5fnKtgrO6COz+HoRVxZxF7I9UUs6wSf4WkiDAGQH/YwTBElqVx4kYni9DQis38s1J7B4hJKu3Sc4DrywI5BaHhy8PQOqD2qrlVxaZX0HqSmC6a07IoH9uBiEU3Wkh+T/bmkz2tEch4HNTdFhwogZCEHCj7ueODPtcTT7ID6lrYlawuf90wzj/aykCDCKrXxksPohLr8GGxaeUJzg9SglgaqgsMkKYdn5Ug8AvRdi9fPDrUSM4n7FT0molCSKxuRU6WleJXbw7hF3J7i2sO5r8ie12f4y3FQy2pQTI34HfZLfo6viScA4sgyNjvU8hrKBXj6AmLikOayJw/8KHFLgNp+ByJyYmTXXg9wYh/l9qjOHmfCaGb2hmZiFSkHJghSseDyoBkM9V6AdqxqeQ0hvyishUlbkVqiXhK3XBvFnkYiV1R27c3x1FEOrxn+5RiozRCBqFaWPPpdZuoDW0aRFWptskGRhT2VtMlySh+iT2Z2wgoSKTGyaw93k+p/QXXgOKh1P10OY899BUCs4xcvd9hbFb0TJDvUynYl3jXhOBf6kKt6TOEki1riGW2NO4BAMsnfhNuMK2834aQ+CmqzWgRpQuof4FxcymO1imo71Jq60IdBCNtcyGR1Z2PTaMWgQFGnTyJRcE/2N0Fqg75sUjkWqfWA1BAsr9S/gGYS73rRj129skKtiTDUY8VOfkiQZyhFvbbEjuqskkkkxMjhkaDO6Jik40Rdm3gRCiu1zSICez2e+b1OxR1Qq5rZo8aw0LY0JzZo1nEnuCE8C9aiBovs2lsZmIwJFvxRUI9MvAgDV/8rArRVG2D5e4mX1xuyQq292tNUAWiqXrbB2OKWDWLWJyeTifhqqT7nADUibZY+ng5qIRv13DdVOML9pjWfyA61euuNDvBYLJUNt8BxU/EX7Zje+NCSjCqAmpZjbyB0mqPi4XRQg9K0VP+CRsMW245YRb71yLdDrYXyAFqxugwj8FXwwIMrVHBqBjPHvNVIwT3ylOwlzdasng7qUaJ+CspntBbhWOLGQQmyy2pN3cTm0a4CiexroUqaxvhIb98Ml8E5mrtI/U22eLvS6aAGl9l0dCfRAj302xWDRZxN3QDZlT0NavA5xCYL2HFsLfOzWEDHcLzXKNbeyBBHhrkwLbJLiJ2iuSpALKUPNUDjMIUcuS/4nqYVmvszmjCaSIUDP9aAUPtT2UFjB+1I6b7XvdWtWCwLQp0gqPfoR3z/HFAnUiTQQHQb3YN6f/tBjTZgpL2TG8MkomrpXAo2c7ULJiyXRaFGj6weF3FCqI3hAlaop6ZugF4JNehWcbfB66DO9V6ke0tV9P6LUBMnyFwznJDGp4Nau083QL39KNxDGf2DQHbPngY16FbxZkFHUDLUEgPNNZ0cXxEIWG+POkFsq/qEUO+xqqPApVSg1vTEQ6BWjOkuPRy5rPRjtawWKdp0aaiZn0S/ZB5OJEBiqHFvJ7HjqPCQ2AWHrSQ9BGuCUCfI42WgBqdStfkugRQeTnMsxjOIF+GNJHZ0na5N4pJcyerFMrQ06KZ9GQ1EBBzo3gCFTqPs3SkaCBhK/g52JGqSUClJXN8g1MQJ0rPo1WcwYXaWWkrDhNGtRbjIjSXw/CCoczk8HGmMShNrCtGgG2KYa9biRQxzhdIwzHUfCHqOI+7QMH9lUucIhTzCR2sKkaCbhsn/H9M53E27qlql4m7S8llUzzGIUc2zt4vQ7kRrUirfhGw3xUfVCIgcOTyOgtp4MwQ6nHptqlIqTlTtFIJBs+isgJ/G0mdlB2FsowezRAv+0kgQCDTXT6jJ6aAG7cp+2pGrAX741YDmsyRO+tgLDRcAppgVKxWVu4OcSO/SLXMMPtTEJkxY+lBDmo12jatSGhde6qvkgBrKQ9WucXcTnPAj8YRWDKeRIHBRr1/zpRKcYIZ6f+EoQLCrhXYnqvoq2m1irwgU2OsrmhU1HYkWRqWZR+QCR+mjl0pwghlquGHauWNBV7mztXpdHAhqkKIsX3Wvr5hJO7h/EqipE4TkJSiafgf/kjrUGHNguMboDIt4buNSsA33ddFN6B0RenRgsZR6s5r1sBT2EByptGA4jQQhm0mxzEkUYfpQjxK1vZnjcZKGjoq1bbyvitnDOyAw9yECVgtXa679kJ1ni5wT3wFFh/5mCQ1PaABO6j3uMp2QGzPU46RlFP/OLuRlYnik7cTaEYkqLyJI6MaJhghnzZCLjG9WSa6ioEH9hajVUuYRhowqwTEkAyt9qBOXEYTVqvxZVfAdq1qWUriR8Q/CflQ9BUV/50QvFQFCKxre3P9naBmSNHMkifYEUEOuJH+S/wARGUJeoCFl2cR2qBVfM4p/XO7ghFCctaKtxYMglqQIbJDKhUuRILUEL8gYVZMTQI3qqAwDOHXhkAF1QY8ZQdqRoCGHd5ArIFhcqOjLR4K4W0+GGiImxbmtlFUmTQcY2C1JEHLTegqoC+axwR7zBApob6j3SiZmzVBLAfOYukx4g10mn9M9NbhJp7Vqwsg/xCOlw2AWu09GTXOpTwE1BL9JplPe8JSkmhFvaHHi+1Pga2eKKHFWgVtP2sZwMUNBQOlFTlbZ7wXKMkhzuYC1lKNBgiBQAZWS4U4BNZqpNKkR3ARkFaHBwaA4UHu0KTPDoFbHLqjJD9yPyQUsYacDcuAWjywsuQDFYvovbFVCeTTGsYt18EP6FQ0pR4OgimlvUtmKk0CNY4O0xiZmOhFHHkl8dni1M2i2h79EPR+xBHcnPotvkIIVSuIzeijEuiWLUHS7LbvkusutkdusYRUmdIH8mww1zXzmo+3c9CbSFfJJoCZB9N6vTjlX7o2NsUThQiJYM8/3PYx4EYt/dzq/v9woMI0SuejmksY1h78wFjRCfjprbCsOlJIIVub+alrxSegNHjnyTwHW5ZogUuGFdbe04BKXJ4KaZCAzj71UPDK9UgIemhwauaV9oQ7Reb6bSKUnFJ/AiByjfPXCaFUuoTAkMkJO05/Sb2goNUE6NKYBA9VOaS1uKEisdaJYU0U/qaE4i3bo1TA0+g013KHpJJJw+/cS40VIpqsCtfLzXV1TIBWDhOoTQZ1Lqs2jBcmYymlJI7RCXamaEHI1i6id9BWoStZLYphe9CiyWi2Vdacz48/sZbIwSymPBxyoRFg4zpYKtTCvEtXxpcQSER61IhXEN42evaZpeIZ82oTCRaR6WUJUFq1EqJgwellDrcxWOJNFzXIj6jb17KJjGxRfgNq1hh/cGZYJ05E2r2uXgUTHXBK08/FqYGAY3pP+jQSsfWIo1oyT4cvXPP9Rz57hR3HXkuBk7gzdXdTIAAh9csEuNiiFXzwzZpgjddVKhY73bMwpnTtqQSnWRw0C1AeSfCmFsj9IGLGkxOV2RZ0TJjtpxloNxpAvZYh0WbdMBSTHeOK6fqTzRUuJSZfV8RHF6XVFXKaPUfEXPxOFOhPp8ZmCzbxV0h1imZT6ZK4/DSR5/hCtFLq+5KyB2QrHx28Tfd/lLq3XxVxvqUx840GqLBpiVdXCJsBevE+oy9572FSH5dyrlAQn441bXOGruHXdy96XxmTTUC6xOVhsnu3x62WdBzf+sMeWtooEzeF60zJsNxlrWHXDr3mMLlY1QWM24tvv+CvrXe1gfOsLfiYFww7rdSvbOrYhcc/pmvyNn77VW/f3rfqXxF+FaRaDwnBO3x3MnnTBOQ+06sW59tOTNvr2cLhnBEu++BQEtc4erfPzWce8JAezQJ4nQy5MuzgMdtZUDrt6rAXBUzG5YX7Y/fhrse4GiU1+f/j+99ejfmrgTyJL2lFG6VIG9dkog/pslEF9NsqgPhtlUJ+NMqjPRhnUZ6MM6rNRBvXZKIP6bJRBfTbKoD4bZVCfjTKoz0YZ1GejDOqzUQb12QhDVo76idqMdpOIBLLXP84oDepHsRV65ZWMUqex63F/8tq6ExkdQs150Vrb4oz0P0GbVRmDBc5kAAAAAElFTkSuQmCC"
            width={100}
            alt=""
            height={40}
          />
        </Left>
        <Mid>
          <input />
          <img alt="" width={20} height={20} src={SearchIcon} />
        </Mid>
        <Right>
          {!state?.token ? (
            <Button
              onClick={() => {
                setLogin(true);
              }}
            >
              Login
            </Button>
          ) : (
            <div className="user">
              <img
                src="https://previews.123rf.com/images/triken/triken1608/triken160800029/61320775-.jpg"
                width={40}
                height={40}
                alt=""
              />

              <div className="dropdown">
                <div>
                  <Link
                    to={location ? '/' : '/account'}
                    onClick={() => setLocation(!location)}
                  >
                    {location ? 'Dasboard' : 'Account'}
                  </Link>
                </div>

                <div onClick={logoutHandler}>Logout</div>
              </div>
            </div>
          )}
        </Right>
      </Container>
    </>
  );
};

export default Navbar;
