import * as React from 'react';
import { MemberEntity } from '../../model/member';
import { memberAPI } from '../../api/memberAPI';
import { MemberRow } from './memberRow';
import { MemberHead } from './memberHead';
import {} from 'core-js';
import { SearchComponent } from '../search';

interface Props {
}

// We define members as a state (the compoment holding this will be a container
// component)
interface State {
  members: Array<MemberEntity>,
  organizationName : string
}

// Nice tsx guide: https://github.com/Microsoft/TypeScript/wiki/JSX
export class MembersTableComponent extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);
    // set initial state
    this.state = { members: [], organizationName : "lemoncode" };
  }

  loadMembers = () => {
    memberAPI.getAllMembers(this.state.organizationName).then((members) =>
      this.setState({ members: members })
    );
  }

  changeOrganizationName = (newEditingOrganizationName : string) => {
    this.setState({ organizationName: newEditingOrganizationName })
  }

  public render() {
    return (
      <div className="row">
        <h2> Members Page</h2>
        
        <SearchComponent
          newOrganizationName={this.state.organizationName}
          onSubmitNewOrganizationName={this.changeOrganizationName}
          onLoadMembers={this.loadMembers}
        />

        <table className="table">
          <thead>
            <MemberHead />
          </thead>
          <tbody>
            {
              this.state.members.map((member: MemberEntity) =>
                <MemberRow key={member.id} member={member} />
              )
            }
          </tbody>
        </table>
      </div>
    );
  }
}
