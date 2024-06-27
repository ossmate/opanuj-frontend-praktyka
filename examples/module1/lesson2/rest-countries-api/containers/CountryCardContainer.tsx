import { ReactNode } from "react"
import { StatusState } from "../types";

type Props = {
  requestResult: StatusState
  children: ReactNode;
}

export const CountryCardContainer = ({ requestResult: { status, error }, children }: Props) => {

  if (status === "loading") {
    return <div>Loading...</div>
  }

  if (status === "rejected") {
    return (
      <div>
        <p>Looks like we couldn't find a result for your request :/</p>
        <p>Error: {error}</p>
      </div>
    );
  }

  return (
    <div style={{ display: 'grid', gridTemplateColumns: "1fr 1fr 1fr", padding: '50px' }}>
      {children}
    </div>
  )
}
