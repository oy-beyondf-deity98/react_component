import React from 'react';
import GridTemplate from "../components/templates/GridTemplate";

function MainApp(props) {
  return (
    <GridTemplate>
      <div style={{background:"antiquewhite"}}>
        <ul>
          <li><a href={"/main"}>메인</a></li>
          <li><a href={"/tree"}>트리</a></li>
          <li><a href={"list"}>리스트</a></li>
        </ul>
      </div>
      <div>
        <article style={{background:"aliceblue"}}>
          <span>
            모든 입력속성에서 disable는 form으로 전송할때 데이터가 전송되지 않는 것을 잊지 말아라
            모든 입력속성에 "disable"와 "readOnly"가 존재할것이다. button만 빼고..
            name는 HTML4부터 사용이 중단되었다. id를 사용하자.
          </span>
          <dl><h5>버튼</h5></dl>
          <dt>submit이나 onClick를 위해서 사용한다.</dt>
          <dd>
            <button>기본</button>
            <button disabled={true}>disabled</button>
            <button value={"버튼의 초기값"}>초기값세팅</button>
            <form id={"btnForm"}>궂이 쓸이요가 이을까?<button form={"btnForm"}>form 실행</button></form>
            <form><button type={"submit"}>실행</button></form>
            <form>
              <input defaultValue={"텍스트"}/>
              <button type={"reset"}>초기화</button>
            </form>
          </dd>
          <dl>datalist</dl>
          <dt>input과 select를 합쳐놓았다. input이 필요, 검색과 직접입력도 가능하다.</dt>
          <dd>
            <input list="browsers" id="myBrowser" name="myBrowser" />
            <datalist id="browsers">
              <option value="Chrome"/>
              <option value="Firefox"/>
              <option value="Internet Explorer"/>
              <option value="Opera"/>
              <option value="Safari"/>
              <option value="Microsoft Edge"/>
            </datalist>

            <input list="browsers" id="myBrowser" name="myBrowser" disabled={true}/>
            <datalist id="browsers">
              <option value="Chrome"/>
              <option value="Firefox"/>
              <option value="Internet Explorer"/>
              <option value="Opera"/>
              <option value="Safari"/>
              <option value="Microsoft Edge"/>
            </datalist>
          </dd>
          <dl>필드셋</dl>
          <dt>필드의 그룹을 만들때 사용된다. 레이블용으로도 쓰는것 같은데 "label"이 있어서 쓸모가 있을련가 모르겠다 </dt>
          <dd>
            <form action="#">
              <fieldset>
                <legend>Simple fieldset</legend>
                <input type="radio" id="radio"/>
                <label htmlFor="radio">Spirit of radio</label>
              </fieldset>
            </form>
            <form action="#">
              <fieldset disabled>
                <legend>Disabled fieldset</legend>
                <div>
                  <label htmlFor="name" >Name: </label>
                  <input type="name" id="text" value="Chris"/>
                </div>
                <div>
                  <label htmlFor="pwd">Archetype: </label>
                  <input type="password" id="text" value="Wookie"/>
                </div>
              </fieldset>
            </form>
            <form id="fieldTest" action="/list">
              <div>
                <label htmlFor="name" for={"aa"}>Name: </label>
                <input type="name" id="aa" defaultValue="Chris"/>
              </div>
              <div>
                <label htmlFor="pwd">Archetype: </label>
                <input type="password" id="text" defaultValue="Wookie"/>
                <button type={"reset"}>클리어</button>
              </div>
            </form>
            <fieldset form={"fieldTest"}>
              <legend>외부에서 폼과 연결한다는데... 안되는데?</legend>
              <input defaultValue={"teset"}/>
            </fieldset>
          </dd>
          <dl>form</dl>
          <dt></dt>
          <dt>
            {/*Form which will send a GET request to the current URL*/}
            <form>
              <label>Name:
                <input name="submitted-name"/>
              </label>
              <button>Save</button>
            </form>

            {/*Form which will send a POST request to the current URL*/}
            <form method="post" autocomplete="on">
              <label>Name:
                <input name="submitted-name"/>
              </label>
              <button>Save</button>
            </form>

            {/*Form with fieldset, legend, and label*/}
            <form method="post">
              <fieldset>
                <legend>Title</legend>
                <label><input type="radio" name="radio"/> Select me</label>
              </fieldset>
            </form>
          </dt>
          <dl>input</dl>
          <dt></dt>
          <dd>
            <fieldset>
              <legend>"input"를 테스트해보다.</legend>
              <input type="button" value="버튼은 아무런 기본 기능도 가지지 않습니다. "/>
              <form>
                <div>
                  <input type="checkbox" id="subscribeNews" name="subscribe" value="newsletter"/>
                    <label htmlFor="subscribeNews">Subscribe to newsletter?</label>
                </div>
                <div>
                  <button type="submit">Subscribe</button>
                </div>
              </form>
              <form>
                <div>
                  <input type="checkbox" id="subscribeNews" name="subscribe" value="newsletter"/>
                    <label htmlFor="subscribeNews">Subscribe to newsletter?</label>
                </div>
                <div>
                  <button type="submit">Subscribe</button>
                </div>
              </form>
              <fieldset>
                <legend>Choose your interests</legend>
                <div>
                  <input type="checkbox" id="coding" name="interest" value="coding"/>
                    <label htmlFor="coding">Coding</label>
                </div>
                <div>
                  <input type="checkbox" id="music" name="interest" value="music"/>
                    <label htmlFor="music">Music</label>
                </div>
              </fieldset>
              <label htmlFor="colorWell">Color:</label>
              <input type="color" value="#ff0000" id="colorWell"/>

              <form>
                <label htmlFor="party">날짜를 선택하세요.
                  <input type="date" name="party" min="2017-04-01" max="20170430"/>
                </label>
              </form>
              <form>
                <div>
                  <label htmlFor="party">Choose your preferred party date and time (required, June 1st 8.30am to June
                    30th 4.30pm):</label>
                  <input id="party" type="datetime-local" name="partydate"
                         min="2017-06-01T08:30" max="2017-06-30T16:30"
                         pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}" required/>
                    <span className="validity"></span>
                </div>
                <div>
                  <input type="submit" value="Book party!"/>
                </div>
                <input type="hidden" id="timezone" name="timezone" value="-08:00"/>
              </form>
              <form method="post" encType="multipart/form-data">
                <div>
                  <label htmlFor="profile_pic">Choose file to upload</label>
                  <input type="file" id="profile_pic" name="profile_pic"
                         accept=".jpg, .jpeg, .png" capture={true} multiple={true}

                  />
                </div>
                <div>
                  <button>Submit</button>
                </div>
              </form>
              <input id="image" type="image" width="100" height="30" alt="Login"
       src="https://raw.githubusercontent.com/mdn/learning-area/master/html/forms/image-type-example/login.png"/>
              <form>
                <div>
                  <label htmlFor="month">What month would you like to visit (June to Sept.)?</label>
                  <input id="month" type="month" name="month"
                         min="2022-06" max="2022-09" required/>
                    <span className="validity"></span>
                </div>
                <div>
                  <input type="submit" value="Submit form"/>
                </div>
              </form>
              <form>
                <div>
                  <label htmlFor="balloons">Number of balloons to order (multiples of 10):</label>
                  <input id="balloons" type="number" name="balloons" step="10" min="0" max="100" required/>
                    <span className="validity"></span>
                </div>
                <input type="number" placeholder="1.0" step="0.01" min="0" max="100" required/>
                <div>
                  <input type="submit"/>
                </div>
              </form>
            </fieldset>
          </dd>
        </article>
      </div>
    </GridTemplate>
  );
}

export default MainApp;