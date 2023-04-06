import { useState } from "react";

import {
  IconHome2,
  IconGauge,
  IconDeviceDesktopAnalytics,
  IconFingerprint,
  IconCalendarStats,
  IconUser,
  IconSettings,
  IconLogout,
  IconSwitchHorizontal,
  IconSwitchVertical,
} from "@tabler/icons-react";

import React from 'react'
import Link from "next/link";

type Props = {}

export default function Navbar({}: Props) {
  return (
    <div className="flex flex-row p-5 m-5 space-x-2">
        <Link href={""}>
       <IconHome2 />
       </Link>
         <Link href={""}>
       <IconSettings />
         </Link>
    </div>
  )
}