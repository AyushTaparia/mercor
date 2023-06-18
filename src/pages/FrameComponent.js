import { useState, useCallback } from "react";
import { Button, Menu, MenuItem, TextField } from "@mui/material";
import styles from "./FrameComponent.module.css";
const FrameComponent = () => {
  const [groupDropdownAnchorEl, setGroupDropdownAnchorEl] = useState(null);
  const [groupDropdown1AnchorEl, setGroupDropdown1AnchorEl] = useState(null);
  const groupDropdownOpen = Boolean(groupDropdownAnchorEl);
  const handleGroupDropdownClick = (event) => {
    setGroupDropdownAnchorEl(event.currentTarget);
  };
  const handleGroupDropdownClose = () => {
    setGroupDropdownAnchorEl(null);
  };
  const groupDropdown1Open = Boolean(groupDropdown1AnchorEl);
  const handleGroupDropdown1Click = (event) => {
    setGroupDropdown1AnchorEl(event.currentTarget);
  };
  const handleGroupDropdown1Close = () => {
    setGroupDropdown1AnchorEl(null);
  };

  const onOnprogress2CardClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='onprogress2Card']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onOnprogress1CardClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='onprogress1Card']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start" });
    }
  }, []);

  const onDone2CardClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='done2Card']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start" });
    }
  }, []);

  const onDone1CardClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='done1Card']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start" });
    }
  }, []);

  const onTodo2CardClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='todo2Card']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start" });
    }
  }, []);

  const onTodo1CardClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='todo1Card']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start" });
    }
  }, []);

  return (
    <div className={styles.rectangleParent}>
      <div className={styles.frameChild} />
      <div className={styles.desktop}>
        <div className={styles.drawer}>
          <div className={styles.drawerChild} />
          <div className={styles.drawerItem} />
          <div className={styles.writeAMessage}>Write a message</div>
          <div className={styles.weDontHave}>
            We don’t have any notice for you, till then you can share your
            thoughts with your peers.
          </div>
          <div className={styles.thoughtsTime}>Thoughts Time</div>
          <img
            className={styles.bulbImageIcon}
            alt=""
            src="/bulb-image@2x.png"
          />
          <div className={styles.drawerInner} />
          <img className={styles.lampOnIcon} alt="" src="/lampon.svg" />
          <img
            className={styles.verticalLine1Icon}
            alt=""
            src="/vertical-line-1.svg"
          />
          <div className={styles.wireframes}>
            <div className={styles.wireframes1}>Wireframes</div>
            <div className={styles.wireframesChild} />
          </div>
          <div className={styles.designSystem}>
            <div className={styles.wireframes1}>Design System</div>
            <div className={styles.designSystemChild} />
          </div>
          <div className={styles.websiteRedesign}>
            <div className={styles.wireframes1}>Website Redesign</div>
            <div className={styles.websiteRedesignChild} />
          </div>
          <div className={styles.mobileApp}>
            <div className={styles.mobileAppChild} />
            <div className={styles.mobileApp1}>Mobile App</div>
            <div className={styles.div}>. . .</div>
            <div className={styles.mobileAppItem} />
          </div>
          <div className={styles.myProjects}>
            <img
              className={styles.vuesaxlinearaddSquareIcon}
              alt=""
              src="/vuesaxlinearaddsquare.svg"
            />
            <b className={styles.myProjects1}>my projects</b>
          </div>
          <img
            className={styles.horizontalRule2Icon}
            alt=""
            src="/horizontal-rule-2.svg"
          />
          <div className={styles.settings}>
            <img
              className={styles.vuesaxlinearsetting2Icon}
              alt=""
              src="/vuesaxlinearsetting2.svg"
            />
            <div className={styles.settings1}>Settings</div>
          </div>
          <div className={styles.members}>
            <img
              className={styles.vuesaxlinearsetting2Icon}
              alt=""
              src="/vuesaxlinearprofile2user.svg"
            />
            <div className={styles.members1}>Members</div>
          </div>
          <div className={styles.tasks}>
            <img
              className={styles.vuesaxlinearsetting2Icon}
              alt=""
              src="/vuesaxlineartasksquare.svg"
            />
            <div className={styles.members1}>Tasks</div>
          </div>
          <div className={styles.messages}>
            <img
              className={styles.vuesaxlinearsetting2Icon}
              alt=""
              src="/vuesaxlinearmessage.svg"
            />
            <div className={styles.members1}>Messages</div>
          </div>
          <div className={styles.home}>
            <img
              className={styles.vuesaxlinearsetting2Icon}
              alt=""
              src="/vuesaxoutlinecategory.svg"
            />
            <div className={styles.members1}>Home</div>
          </div>
          <img className={styles.sidebarIcon} alt="" src="/sidebar.svg" />
          <img className={styles.logoIcon} alt="" src="/logo@2x.png" />
          <div className={styles.heading}>
            <div className={styles.projectMWrapper}>
              <div className={styles.projectM}>Project M.</div>
            </div>
          </div>
        </div>
        <section className={styles.onprogressGroup}>
          <div className={styles.onprogressBg} />
          <div className={styles.maskGroup}>
            <div className={styles.maskGroupChild} />
          </div>
          <section
            className={styles.onprogress2Card}
            data-scroll-to="onprogress2Card"
            onClick={onOnprogress2CardClick}
          >
            <div className={styles.onprogress2CardChild} />
            <img
              className={styles.unsplashbs1xgrkih4Icon}
              alt=""
              src="/unsplashbs-1xgrkih4@2x.png"
            />
            <img
              className={styles.unsplashkiqjfzbii9wIcon}
              alt=""
              src="/unsplashkiqjfzbii9w@2x.png"
            />
            <div className={styles.groupParent}>
              <div className={styles.groupContainer}>
                <img
                  className={styles.groupChild}
                  alt=""
                  src="/group-628.svg"
                />
                <img className={styles.groupItem} alt="" src="/group-627.svg" />
                <div className={styles.comments}>9 comments</div>
                <div className={styles.files}>10 files</div>
              </div>
              <img
                className={styles.groupInner}
                alt=""
                src="/ellipse-12@2x.png"
              />
            </div>
            <div className={styles.moodboard}>Moodboard</div>
            <div className={styles.div1}>. . .</div>
            <div className={styles.rectangleGroup}>
              <div className={styles.rectangleDiv} />
              <div className={styles.low}>Low</div>
            </div>
          </section>
          <section
            className={styles.onprogress1Card}
            data-scroll-to="onprogress1Card"
            onClick={onOnprogress1CardClick}
          >
            <div className={styles.onprogress1CardChild} />
            <img
              className={styles.unsplashmicqqgydq6wIcon}
              alt=""
              src="/unsplashmicqqgydq6w@2x.png"
            />
            <div className={styles.groupDiv}>
              <div className={styles.groupParent1}>
                <img
                  className={styles.groupIcon}
                  alt=""
                  src="/group-6281.svg"
                />
                <img
                  className={styles.groupItem}
                  alt=""
                  src="/group-6271.svg"
                />
                <div className={styles.comments}>14 comments</div>
                <div className={styles.files1}>15 files</div>
              </div>
              <img
                className={styles.ellipseIcon}
                alt=""
                src="/ellipse-15@2x.png"
              />
              <img
                className={styles.commentsChild}
                alt=""
                src="/ellipse-13@2x.png"
              />
              <img
                className={styles.groupInner}
                alt=""
                src="/ellipse-12@2x.png"
              />
            </div>
            <div
              className={styles.moodboard}
            >{`Onboarding Illustrations `}</div>
            <div className={styles.div1}>. . .</div>
            <div className={styles.rectangleGroup}>
              <div className={styles.rectangleDiv} />
              <div className={styles.low}>Low</div>
            </div>
          </section>
          <img
            className={styles.onprogressHrIcon}
            alt=""
            src="/onprogress-hr.svg"
          />
          <div className={styles.onprogressCount}>
            <div className={styles.onprogressCountChild} />
            <div className={styles.div3}>3</div>
          </div>
          <div className={styles.onprogressHeading}>
            <div className={styles.onProgress}>On Progress</div>
            <div className={styles.websiteRedesignChild} />
          </div>
        </section>
        <section className={styles.doneGroup}>
          <div className={styles.doneBg} />
          <section
            className={styles.done2Card}
            data-scroll-to="done2Card"
            onClick={onDone2CardClick}
          >
            <div className={styles.done2CardChild} />
            <div className={styles.groupParent2}>
              <div className={styles.groupParent1}>
                <img
                  className={styles.groupIcon}
                  alt=""
                  src="/group-6282.svg"
                />
                <img
                  className={styles.groupItem}
                  alt=""
                  src="/group-6272.svg"
                />
                <div className={styles.comments}>12 comments</div>
                <div className={styles.files1}>15 files</div>
              </div>
              <img className={styles.groupChild7} alt="" src="/group-633.svg" />
            </div>
            <div className={styles.moodboard}>Design System</div>
            <div className={styles.div1}>. . .</div>
            <div
              className={styles.itJustNeeds}
            >{`It just needs to adapt the UI from what you did before `}</div>
            <div className={styles.status}>
              <div className={styles.statusChild} />
              <div className={styles.low}>Completed</div>
            </div>
          </section>
          <section
            className={styles.done1Card}
            data-scroll-to="done1Card"
            onClick={onDone1CardClick}
          >
            <div className={styles.done1CardChild} />
            <div className={styles.done1CardItem} />
            <img
              className={styles.maskGroupIcon}
              alt=""
              src="/mask-group@2x.png"
            />
            <div className={styles.comments3}>
              <div className={styles.groupParent1}>
                <img
                  className={styles.groupIcon}
                  alt=""
                  src="/group-6283.svg"
                />
                <img
                  className={styles.groupItem}
                  alt=""
                  src="/group-6273.svg"
                />
                <div className={styles.comments}>12 comments</div>
                <div className={styles.files1}>15 files</div>
              </div>
              <img
                className={styles.commentsChild}
                alt=""
                src="/ellipse-13@2x.png"
              />
              <img
                className={styles.groupInner}
                alt=""
                src="/ellipse-121@2x.png"
              />
            </div>
            <div className={styles.moodboard}>Mobile App Design</div>
            <div className={styles.div1}>. . .</div>
            <div className={styles.status}>
              <div className={styles.statusChild} />
              <div className={styles.low}>Completed</div>
            </div>
          </section>
          <img className={styles.onprogressHrIcon} alt="" src="/done-hr.svg" />
          <div className={styles.doneCount}>
            <div className={styles.onprogressCountChild} />
            <div className={styles.div3}>2</div>
          </div>
          <div className={styles.doneHeading}>
            <div className={styles.onProgress}>Done</div>
            <div className={styles.wireframesChild} />
          </div>
        </section>
        <div className={styles.todoGroup}>
          <div className={styles.doneBg} />
          <div className={styles.maskGroup1}>
            <div className={styles.rectangleParent2}>
              <div className={styles.done2CardChild} />
              <div className={styles.groupParent5}>
                <div className={styles.groupParent6}>
                  <img
                    className={styles.groupChild12}
                    alt=""
                    src="/group-6284.svg"
                  />
                  <img
                    className={styles.groupItem}
                    alt=""
                    src="/group-6274.svg"
                  />
                  <div className={styles.comments}>2 comments</div>
                  <div className={styles.files4}>0 files</div>
                </div>
                <img
                  className={styles.groupChild7}
                  alt=""
                  src="/group-6331.svg"
                />
              </div>
              <div className={styles.brainstorming}>Wireframes</div>
              <div className={styles.div7}>. . .</div>
              <div className={styles.itJustNeeds}>
                Low fidelity wireframes include the most basic content and
                visuals.
              </div>
              <div className={styles.rectangleParent3}>
                <div className={styles.groupChild15} />
                <div className={styles.low}>High</div>
              </div>
            </div>
          </div>
          <section
            className={styles.todo2Card}
            data-scroll-to="todo2Card"
            onClick={onTodo2CardClick}
          >
            <div className={styles.todo2CardChild} />
            <div className={styles.groupParent7}>
              <div className={styles.groupParent8}>
                <img
                  className={styles.groupChild16}
                  alt=""
                  src="/group-6285.svg"
                />
                <img
                  className={styles.groupChild17}
                  alt=""
                  src="/group-6275.svg"
                />
                <div className={styles.comments6}>10 comments</div>
                <div className={styles.files5}>3 files</div>
              </div>
              <img
                className={styles.groupChild18}
                alt=""
                src="/group-6332.svg"
              />
            </div>
            <div className={styles.research}>Research</div>
            <div className={styles.div8}>. . .</div>
            <div className={styles.userResearchHelps}>
              User research helps you to create an optimal product for users.
            </div>
            <div className={styles.rectangleParent4}>
              <div className={styles.groupChild19} />
              <div className={styles.high1}>High</div>
            </div>
          </section>
          <section
            className={styles.todo1Card}
            data-scroll-to="todo1Card"
            onClick={onTodo1CardClick}
          >
            <div className={styles.toDo1}>
              <div className={styles.done2CardChild} />
              <div className={styles.groupParent5}>
                <div className={styles.groupParent10}>
                  <img
                    className={styles.groupIcon}
                    alt=""
                    src="/group-6286.svg"
                  />
                  <img
                    className={styles.groupItem}
                    alt=""
                    src="/group-6276.svg"
                  />
                  <div className={styles.comments}>12 comments</div>
                  <div className={styles.files1}>0 files</div>
                </div>
                <img
                  className={styles.groupChild7}
                  alt=""
                  src="/group-6333.svg"
                />
              </div>
              <div className={styles.brainstorming}>Brainstorming</div>
              <div className={styles.div7}>. . .</div>
              <div
                className={styles.itJustNeeds}
              >{`Brainstorming brings team members' diverse experience into play. `}</div>
              <div className={styles.rectangleGroup}>
                <div className={styles.rectangleDiv} />
                <div className={styles.low}>Low</div>
              </div>
            </div>
          </section>
          <img className={styles.onprogressHrIcon} alt="" src="/todo-hr.svg" />
          <img className={styles.addSquareIcon} alt="" src="/add-square.svg" />
          <div className={styles.todoCount}>
            <div className={styles.onprogressCountChild} />
            <div className={styles.div3}>4</div>
          </div>
          <div className={styles.toDoHeading}>
            <div className={styles.onProgress}>To Do</div>
            <div className={styles.toDoHeadingChild} />
          </div>
        </div>
        <div className={styles.shareView}>
          <Button
            className={styles.share}
            sx={{ width: 97 }}
            variant="outlined"
            color="primary"
          >
            Share
          </Button>
          <img className={styles.viewIcon} alt="" src="/view.svg" />
          <img className={styles.shareViewChild} alt="" src="/vector-10.svg" />
        </div>
        <div className={styles.inviteUsers}>
          <div className={styles.inviteParent}>
            <div className={styles.invite}>Invite</div>
            <img
              className={styles.vuesaxlinearaddSquareIcon1}
              alt=""
              src="/vuesaxlinearaddsquare1.svg"
            />
          </div>
          <div className={styles.ellipseParent}>
            <img
              className={styles.groupChild24}
              alt=""
              src="/ellipse-122@2x.png"
            />
            <img
              className={styles.groupChild25}
              alt=""
              src="/ellipse-131@2x.png"
            />
            <img
              className={styles.groupChild26}
              alt=""
              src="/ellipse-151@2x.png"
            />
            <img
              className={styles.groupChild27}
              alt=""
              src="/ellipse-14@2x.png"
            />
            <div className={styles.ellipseDiv} />
            <div className={styles.div11}>+2</div>
          </div>
        </div>
        <div className={styles.mobileApp2}>
          <div className={styles.groupParent11}>
            <img className={styles.groupChild28} alt="" src="/group-643.svg" />
            <div className={styles.mobileApp3}>Mobile App</div>
          </div>
        </div>
        <div className={styles.filterAndDate}>
          <div className={styles.todayParent}>
            <Button
              sx={{ width: 477.22222900390625 }}
              id="button-Today"
              aria-controls="menu-Today"
              aria-haspopup="true"
              aria-expanded={groupDropdownOpen ? "true" : undefined}
              onClick={handleGroupDropdownClick}
              color="primary"
            >
              Today
            </Button>
            <Menu
              anchorEl={groupDropdownAnchorEl}
              open={groupDropdownOpen}
              onClose={handleGroupDropdownClose}
            />
          </div>
          <div className={styles.filterParent}>
            <Button
              sx={{ width: 122 }}
              id="button-Filter"
              aria-controls="menu-Filter"
              aria-haspopup="true"
              aria-expanded={groupDropdown1Open ? "true" : undefined}
              onClick={handleGroupDropdown1Click}
              color="primary"
            >
              Filter
            </Button>
            <Menu
              anchorEl={groupDropdown1AnchorEl}
              open={groupDropdown1Open}
              onClose={handleGroupDropdown1Close}
            />
          </div>
        </div>
        <img
          className={styles.horizontalRule1Icon}
          alt=""
          src="/horizontal-rule-1.svg"
        />
        <div className={styles.profile}>
          <img
            className={styles.vuesaxoutlinearrowDownIcon}
            alt=""
            src="/vuesaxoutlinearrowdown.svg"
          />
          <div className={styles.animaAgrawalParent}>
            <div className={styles.share}>Anima Agrawal</div>
            <div className={styles.upIndia}>U.P, India</div>
          </div>
        </div>
        <img
          className={styles.maskGroupIcon1}
          alt=""
          src="/mask-group1@2x.png"
        />
        <img className={styles.notifIcons} alt="" src="/notif-icons.svg" />
        <TextField
          className={styles.search}
          sx={{ width: 417 }}
          color="primary"
          variant="filled"
          type="text"
          label="Search for anything..."
          placeholder="Placeholder"
          size="medium"
          margin="none"
        />
      </div>
    </div>
  );
};

export default FrameComponent;
