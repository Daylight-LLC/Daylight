import React, { useState, useEffect } from 'react';
import Dropdown from './common/Dropdown';
import { TableContainer, Table, TableBody, TableCell, TableHead, TableRow, Paper } from '@mui/material';
import { Project } from '../interfaces/interfaces';

function createData(
  projectName: string,
  teamLead: string,
  createdAt: string,
  status: string
) {
  return { projectName, teamLead, createdAt, status };
}

interface ProjectSummaryProps {
    projects: Project[];
  }
  
  const ProjectSummary: React.FC<ProjectSummaryProps> = ({ projects }) => {



  const rows = projects.map(project => {
    const teamLead = project.teams[0]?.teamLeadName || 'Unknown';
    return createData(project.name, teamLead, project.createdAt, 'Open');
  });

  const dropdowns = [
    {
      label: 'Project',
      options: ['Internal', 'Client', 'Research', 'Maintenance', 'New Development']
    },
    {
      label: 'Status',
      options: ['Open', 'Progress', 'Review', 'Closed']
    }
  ];

  return (
    <div className='border border-gray-300 rounded-md w-full lg:basis-2/3 md:basis-full ' style={{contain: 'content'}}>
      <div className='w-full flex justify-between items-center p-3'>
        <h2 className="lg:text-xl md:text-lg font-semibold">Project Summary</h2>
        <div className='flex gap-4'>
          {dropdowns.map((dropdown, index) => (
            <div key={index} className='border border-gray-300 rounded-md'>
              <Dropdown label={dropdown.label} options={dropdown.options} />
            </div>
          ))}
        </div>
      </div>
      <div className='p-4' style={{ height: '17rem', overflow: 'auto', contain: 'content' }}>
        <TableContainer component={Paper} style={{ maxHeight: '100%', overflowX: 'hidden' }}>
          <Table stickyHeader sx={{ minWidth: '15rem'}} aria-label="project table">
            <TableHead>
              <TableRow>
                <TableCell style={{ fontWeight: 'bold' }}>Project Name</TableCell>
                <TableCell align="left" style={{ fontWeight: 'bold' }}>Team Lead</TableCell>
                <TableCell align="left" style={{ fontWeight: 'bold' }}>Created At</TableCell>
                <TableCell align="left" style={{ fontWeight: 'bold' }}>Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, index) => (
                <TableRow
                  key={index}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row" style={{ fontWeight: 'bold' }}>
                    {row.projectName}
                  </TableCell>
                  <TableCell align="left">{row.teamLead}</TableCell>
                  <TableCell align="left">{row.createdAt}</TableCell>
                  <TableCell align="left">{row.status}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default ProjectSummary;
