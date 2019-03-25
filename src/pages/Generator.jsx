import React from "react";
import "./Generator.scss";

class Generator extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            value: '',
            letters: {
              q: {
                visibility: 'false'
              },
              w: {
                visibility: 'false'
              },
              e: {
                visibility: 'false'
              },
              r: {
                visibility: 'false'
              },
              t: {
                visibility: 'false'
              },
              y: {
                visibility: 'false'
              },
              u: {
                visibility: 'false'
              },
              i: {
                visibility: 'false'
              },
              o: {
                visibility: 'false'
              },
              p: {
                visibility: 'false'
              },
              l: {
                visibility: 'false'
              },
              k: {
                visibility: 'false'
              },
              j: {
                visibility: 'false'
              },
              h: {
                visibility: 'false'
              },
              g: {
                visibility: 'false'
              },
              f: {
                visibility: 'false'
              },
              d: {
                visibility: 'false'
              },
              s: {
                visibility: 'false'
              },
              a: {
                visibility: 'false'
              },
              z: {
                visibility: 'false'
              },
              x: {
                visibility: 'false'
              },
              c: {
                visibility: 'false'
              },
              v: {
                visibility: 'false'
              },
              b: {
                visibility: 'false'
              },
              n: {
                visibility: 'false'
              },
              m: {
                visibility: 'false'
              }
            }
        }

       
    this.myInput = React.createRef();
    this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount () {
      this.myInput.current.focus()
      console.log(this.state.value);
    }
    


    handleChange(event) {
      console.log(event.currentTarget);
      this.setState({
        value: event.currentTarget.value,
        letters: {
          ...this.state.letters,
          [event.currentTarget.value]: {
            visibility: ![event.currentTarget.value].visibility
          }
        }

      });
    }

    render() {
        return (
          <div className="container">
            <div className="gruppo-svg">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1417.52 1416.26">
                <defs />
                <g id="e" style={{visibility: this.state.letters.e.visibility ? 'hidden' : 'visible' }}  ref="e">
                  <path d="M708.76,1128.89c-234.83,0-425.88-191.05-425.88-425.88h5c0,232.07,188.81,420.88,420.88,420.88S1129.63,935.08,1129.63,703h5C1134.63,937.84,943.59,1128.89,708.76,1128.89Z" />
                </g>
                <g id="u" style={{visibility: this.state.letters.u.visibility ? 'hidden' : 'visible' }}  ref="u">
                  <path d="M708.76,1097.84v-25c202.88,0,367.93-165,367.93-367.92S911.64,337,708.76,337V312c216.66,0,392.93,176.27,392.93,392.93S925.42,1097.84,708.76,1097.84Z" />
                </g>
                <g id="d" style={{visibility: this.state.letters.d.visibility ? 'hidden' : 'visible' }}  ref="d">
                  <rect x="990.36" y="288.53" width="10" height="418.14" />
                  <rect x="951.95" y="518.96" width="10" height="330" />
                </g>
                <g id="l" style={{visibility: this.state.letters.l.visibility ? 'hidden' : 'visible' }}  ref="l">
                  <rect x="251.16" y="601.91" width="60.92" height="5" />
                  <rect x="251.17" y="623.79" width="60.92" height="5" />
                  <rect x="251.18" y="645.66" width="60.91" height="5" />
                  <rect x="251.19" y="667.53" width="60.92" height="5" />
                  <rect x="1105.45" y="601.91" width="60.91" height="5" />
                  <rect x="1105.44" y="623.79" width="60.92" height="5" />
                  <rect x="1105.43" y="645.66" width="60.91" height="5" />
                  <rect x="1105.41" y="667.53" width="60.92" height="5" />
                </g>
                <g id="t" style={{visibility: this.state.letters.t.visibility ? 'hidden' : 'visible' }}  ref="t">
                  <path d="M708.76,911.7v-2.5c111.94,0,203-91.07,203-203s-91.06-203-203-203v-2.5c113.32,0,205.5,92.18,205.5,205.5S822.08,911.7,708.76,911.7Z" />
                </g>
                <g id="o" style={{visibility: this.state.letters.o.visibility ? 'hidden' : 'visible' }}  ref="o">
                  <path d="M708.76,1238.48c-293.5,0-532.29-238.78-532.29-532.29S415.26,173.91,708.76,173.91s532.29,238.78,532.29,532.28S1002.26,1238.48,708.76,1238.48Zm0-1059.57c-290.75,0-527.29,236.53-527.29,527.28S418,1233.48,708.76,1233.48s527.29-236.54,527.29-527.29S999.51,178.91,708.76,178.91Z" />
                  <path d="M445.46,704.54h-80c0-189.57,154.23-343.79,343.8-343.79v80C563.8,440.75,445.46,559.09,445.46,704.54Z" />
                </g>
                <g id="n" style={{visibility: this.state.letters.n.visibility ? 'hidden' : 'visible' }}  ref="n">
                  <path d="M711.31,1324.92c-167.37,0-324.24-65.68-441.71-184.94l28.49-28.06c109.9,111.56,256.65,173,413.22,173,153.17,0,297.64-59.16,406.8-166.58l28.05,28.5C1029.48,1261.68,875,1324.92,711.31,1324.92Z" />
                </g>
                <g id="p" style={{visibility: this.state.letters.p.visibility ? 'hidden' : 'visible' }}  ref="p">
                  <polygon points="708.95 116.51 660.25 200.86 757.65 200.86 708.95 116.51" />
                  <polygon points="708.95 1290.77 660.25 1206.42 757.65 1206.42 708.95 1290.77" />
                </g>
                <g id="r" style={{visibility: this.state.letters.r.visibility ? 'hidden' : 'visible' }}  ref="r">
                  <path d="M461.19,1093.16a47.71,47.71,0,1,1,47.72-47.71A47.77,47.77,0,0,1,461.19,1093.16Zm0-90.42a42.71,42.71,0,1,0,42.72,42.71A42.76,42.76,0,0,0,461.19,1002.74Z" />
                  <path d="M582,1153.51a47.71,47.71,0,1,1,47.71-47.71A47.76,47.76,0,0,1,582,1153.51Zm0-90.42a42.71,42.71,0,1,0,42.71,42.71A42.76,42.76,0,0,0,582,1063.09Z" />
                  <path d="M367.59,1000a47.72,47.72,0,1,1,47.71-47.72A47.77,47.77,0,0,1,367.59,1000Zm0-90.43a42.72,42.72,0,1,0,42.71,42.71A42.76,42.76,0,0,0,367.59,909.61Z" />
                </g>
                <g id="c" style={{visibility: this.state.letters.c.visibility ? 'hidden' : 'visible' }}  ref="c">
                  <path d="M711.31,575.77a128.72,128.72,0,1,1,0,257.44Z" />
                </g>
                <g id="w" style={{visibility: this.state.letters.w.visibility ? 'hidden' : 'visible' }}  ref="w">
                  <path d="M115.83,861.6a624.77,624.77,0,0,1-17.29-100l39.84-3.58a584.93,584.93,0,0,0,16.18,93.53Z" />
                  <path d="M242.13,1105.85a617.12,617.12,0,0,1-69.46-101h0l0-.07-.15-.27-.27-.49v0a619.31,619.31,0,0,1-50.74-122.1l38.37-11.32a579,579,0,0,0,47.49,114.27l.36.66a577.85,577.85,0,0,0,65,94.5Z" />
                </g>
                <g id="v" style={{visibility: this.state.letters.v.visibility ? 'hidden' : 'visible' }}  ref="v">
                  <path d="M422.77,420.38l-3.48-3.6a414.37,414.37,0,0,1,289.47-117v5A409.36,409.36,0,0,0,422.77,420.38Z" />
                </g>
                <g id="x" style={{visibility: this.state.letters.x.visibility ? 'hidden' : 'visible' }}  ref="x">
                  <path d="M1198.51,902.31l-.47-.54-40.42-46.69.24-.69L1178.09,796l.7-.13,60.64-11.65.48.54,40.41,46.69-.23.68-20.23,58.35Zm-38-47.78,39,45.06L1258,888.34,1277.49,832l-39-45L1180,798.23Z" />
                  <path d="M1208.11,874.63l-21.72-25.08,10.87-31.35,32.58-6.27L1251.55,837l-10.86,31.35ZM1189.22,849l19.83,22.91,29.75-5.72,9.92-28.62-19.83-22.91-29.74,5.72Z" />
                </g>
                <g id="a" style={{visibility: this.state.letters.a.visibility ? 'hidden' : 'visible' }}  ref="a">
                  <path d="M708.76,545.79c87.74,0,159.12,71.38,159.12,159.13S796.5,864,708.76,864,549.64,792.66,549.64,704.92,621,545.79,708.76,545.79m0-5A164.13,164.13,0,1,0,872.88,704.92,164.12,164.12,0,0,0,708.76,540.79Z" />
                  <path d="M711.31,976.88q-11.41,0-22.61-.92c-140.83-11.54-251.91-129.84-251.91-273.6,0-151.37,123.15-274.52,274.52-274.52v15c-143.1,0-259.52,116.42-259.52,259.52,0,135.74,104.75,247.47,237.66,258.61q10.81.91,21.86.91Z" />
                </g>
                <g id="b" style={{visibility: this.state.letters.b.visibility ? 'hidden' : 'visible' }}  ref="b">
                  <rect
                    x="997.65"
                    y="788.98"
                    width="5"
                    height="417.49"
                    transform="translate(-412.56 999.08) rotate(-44.99)"
                  />
                  <rect
                    x="421.56"
                    y="212.29"
                    width="5"
                    height="418.64"
                    transform="translate(-173.92 423.72) rotate(-45.04)"
                  />
                  <rect
                    x="391.65"
                    y="344.99"
                    width="5"
                    height="161.98"
                    transform="translate(-185.77 403.32) rotate(-44.99)"
                  />
                  <rect
                    x="1017.86"
                    y="901.85"
                    width="5"
                    height="161.99"
                    transform="translate(-396.13 1009.01) rotate(-44.99)"
                  />
                </g>
                <g id="g" style={{visibility: this.state.letters.g.visibility ? 'hidden' : 'visible' }}  ref="g">
                  <circle cx="708.76" cy="902.26" r="29.41" />
                  <circle cx="707.43" cy="969.38" r="19.87" />
                  <circle cx="708.76" cy="1026.51" r="13.62" />
                </g>
                <g id="f" style={{visibility: this.state.letters.f.visibility ? 'hidden' : 'visible' }}  ref="f">
                  <path d="M740,222.9l-31.19,54-31.19-54H740m17.32-10h-97l48.51,84,48.51-84Z" />
                  <rect x="703.78" y="282.47" width="10" height="260.71" />
                </g>
                <g id="q" style={{visibility: this.state.letters.q.visibility ? 'hidden' : 'visible' }}  ref="q">
                  <path d="M598.53,551.57l16.17,60.25-60.26-16.13,44.09-44.12m5.17-19.32-68.58,68.63L628.85,626l-25.15-93.7Z" />
                  <path d="M740.65,673V731.7H682V673h58.67m5-5H677V736.7h68.67V668Z" />
                  <rect x="690.89" y="682.59" width="40.85" height="40.85" />
                </g>
                <g id="m" style={{visibility: this.state.letters.m.visibility ? 'hidden' : 'visible' }}  ref="m">
                  <circle cx="592.59" cy="817.2" r="12.13" />
                  <circle cx="823.01" cy="588.97" r="12.13" />
                  <rect
                    x="377.03"
                    y="702.05"
                    width="660.79"
                    height="5"
                    transform="translate(-290.99 706.59) rotate(-45)"
                  />
                </g>
                <g id="z" style={{visibility: this.state.letters.z.visibility ? 'hidden' : 'visible' }}  ref="z">
                  <circle cx="198.62" cy="563.99" r="11.35" />
                  <circle cx="567.06" cy="195.69" r="11.35" />
                  <circle cx="333.44" cy="332.04" r="11.35" />
                  <circle cx="1220.25" cy="844.24" r="11.35" />
                  <circle cx="850.81" cy="1215.73" r="11.35" />
                  <circle cx="1082.87" cy="1078.85" r="11.35" />
                </g>
                <g id="k" style={{visibility: this.state.letters.k.visibility ? 'hidden' : 'visible' }}  ref="k">
                  <circle cx="367.59" cy="952.32" r="13.1" />
                  <circle cx="461.19" cy="1045.45" r="13.1" />
                  <circle cx="582.02" cy="1105.8" r="13.1" />
                </g>
                <g id="i" style={{visibility: this.state.letters.i.visibility ? 'hidden' : 'visible' }}  ref="i">
                  <path d="M1339.24,722.79h-15c0-339.38-276.1-615.48-615.48-615.48S93.28,383.41,93.28,722.79h-15c0-347.65,282.83-630.48,630.48-630.48S1339.24,375.14,1339.24,722.79Z" />
                </g>
                <g id="y" style={{visibility: this.state.letters.y.visibility ? 'hidden' : 'visible' }}  ref="y">
                  <circle cx="1166.63" cy="439.52" r="9.93" />
                  <circle cx="1238.55" cy="398.04" r="31.55" />
                </g>
                <g id="j" style={{visibility: this.state.letters.j.visibility ? 'hidden' : 'visible' }}  ref="j">
                  <circle cx="995.36" cy="168.3" r="15.93" />
                  <circle cx="995.36" cy="212.9" r="15.93" />
                  <circle cx="995.36" cy="257.49" r="15.93" />
                </g>
                <g id="s" style={{visibility: this.state.letters.s.visibility ? 'hidden' : 'visible' }}  ref="s">
                  <path d="M255.5,332.1l-40.89-47.23,20.46-59L296.42,214l40.89,47.24-20.46,59Zm-38.06-47.78,39,45.05L315,318.12l19.51-56.3-39-45L237,228Z" />
                  <path d="M265.09,304.42l-21.72-25.08L254.24,248l32.59-6.27,21.71,25.09-10.87,31.35Zm-18.88-25.63L266,301.69,295.78,296l9.93-28.63-19.83-22.9-29.75,5.72Z" />
                </g>
                <g id="h" style={{visibility: this.state.letters.h.visibility ? 'hidden' : 'visible' }}  ref="h">
                  <rect x="302.8" y="812.2" width="247.66" height="5" />
                  <rect x="241.53" y="845.39" width="247.66" height="5" />
                </g>
              </svg>
            </div>
            <input
          onChange={this.handleChange}
          ref={this.myInput}
          defaultValue={this.state.value}
        />
          </div>
        );
      }
    }
    export default Generator;