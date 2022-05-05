import { Navbar } from "components"
import { Form, Formik } from "formik";
import * as Yup from "yup";

import React, { useState } from "react"
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { createTeam } from "services/team.service";
import { number } from "yup/lib/locale";
import ITeamProject from "../ITeamProject.interface";
import { Toast } from "react-toastify/dist/components";
import { TeamForm } from "../AllTeamProjectTeam/AllTeamProjectTeam.style";
import { ButtonForm, LabelStyle, StyledInlineErrorMessageForm } from "./MyTeam.style";
import { IconText, Input } from "styles";
import { paths } from "config/paths";

export const MyTeam = () => {
    const [passwordShown, setPasswordShown] = useState(false);
    let navigate = useNavigate();
  
    const { t } = useTranslation();
  
    const navigateToAddTeam = () => {
      navigate(paths.addTeam);
    };
  
    return (
      <>
       <Navbar />
          <ButtonForm type="submit" onClick={navigateToAddTeam}>
          {t`team.button.add`}
        </ButtonForm>
       </>
    );
  };
  